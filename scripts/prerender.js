#!/usr/bin/env node

import puppeteer from 'puppeteer';
import http from 'node:http';
import https from 'node:https';
import { promises as fs } from 'fs';
import path from 'path';
import { spawn } from 'child_process';

// Routes to prerender
const routes = [
  '/',
  '/about/',
  '/policies/',
  '/quotes/',
  '/term-countdown/',
  '/speeches/',
  '/inauguration/',
  '/president47/',
  '/trump-die/',
];

// Base URL for the dev server
const BASE_URL = process.env.PRERENDER_BASE_URL ?? 'http://127.0.0.1:4173'; // Vite preview server
const BASE_URL_OBJECT = new URL(BASE_URL);
const PREVIEW_HOST = BASE_URL_OBJECT.hostname;
const PREVIEW_PORT = BASE_URL_OBJECT.port || (BASE_URL_OBJECT.protocol === 'https:' ? '443' : '80');
const PREVIEW_PING_URL = BASE_URL_OBJECT.href;
const NPM_COMMAND = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const SERVER_TIMEOUT_MS = 45000;
const CUSTOM_EXECUTABLE_PATH = process.env.PUPPETEER_EXECUTABLE_PATH || process.env.CHROME_PATH || null;

function stripAnsi(value) {
  return value.replace(/\u001b\[[0-9;]*m/g, '');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = SERVER_TIMEOUT_MS) {
  const deadline = Date.now() + timeoutMs;
  const requester = url.startsWith('https:') ? https : http;

  while (Date.now() < deadline) {
    const isReady = await new Promise((resolve) => {
      const request = requester.get(url, (res) => {
        res.resume();
        resolve(true);
      });

      request.on('error', () => resolve(false));
      request.setTimeout(2000, () => {
        request.destroy();
        resolve(false);
      });
    });

    if (isReady) {
      return;
    }

    await sleep(500);
  }

  throw new Error(`Preview server was not reachable at ${url} within ${timeoutMs}ms`);
}

async function startPreviewServer() {
  console.log('🔧 Starting preview server...');
  const server = spawn(NPM_COMMAND, ['run', 'preview', '--', '--host', PREVIEW_HOST, '--port', String(PREVIEW_PORT)], {
    stdio: 'pipe'
  });

  // Collect output for debugging
  let output = '';
  server.stdout.on('data', (data) => {
    const text = data.toString();
    output += text;
    console.log('[Preview Server]:', stripAnsi(text).trim());
  });

  server.stderr.on('data', (data) => {
    const text = data.toString();
    output += text;
    console.error('[Preview Server Error]:', stripAnsi(text).trim());
  });

  // Wait for server to be ready with timeout
  const serverReady = new Promise((resolve, reject) => {
    let finished = false;
    const timeout = setTimeout(() => {
      if (finished) return;
      finished = true;
      reject(new Error(`Preview server start timeout (${SERVER_TIMEOUT_MS / 1000}s). Output:\n${stripAnsi(output)}`));
    }, SERVER_TIMEOUT_MS);

    server.on('error', (err) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeout);
      reject(err);
    });

    server.on('exit', (code) => {
      if (finished) return;
      if (code !== null && code !== 0) {
        finished = true;
        clearTimeout(timeout);
        reject(new Error(`Preview server exited with code ${code}. Output:\n${stripAnsi(output)}`));
      }
    });

    (async () => {
      try {
        await waitForServer(PREVIEW_PING_URL);
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        console.log('✅ Preview server ready');
        resolve();
      } catch (error) {
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        reject(error);
      }
    })();
  });

  await serverReady;
  return server;
}

async function prerender() {
  console.log('🚀 Starting SSG prerendering...');

  let previewServer = null;
  let browser = null;

  try {
    // Start the preview server
    previewServer = await startPreviewServer();

    // Wait a bit more to ensure server is fully ready
    console.log('⏳ Waiting for server to stabilize...');
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('🌐 Launching browser...');
    if (CUSTOM_EXECUTABLE_PATH) {
      console.log(`🧭 Using Chromium executable at ${CUSTOM_EXECUTABLE_PATH}`);
    }
    browser = await puppeteer.launch({
      headless: true,
      executablePath: CUSTOM_EXECUTABLE_PATH ?? undefined,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
    console.log('✅ Browser launched');

    const page = await browser.newPage();

    // Create dist directory if it doesn't exist
    const distDir = './dist';
    await fs.mkdir(distDir, { recursive: true });

    for (const route of routes) {
      try {
        console.log(`📄 Prerendering: ${route}`);

        const url = `${BASE_URL}${route}`;
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 60000
        });

        // Wait a bit for dynamic content to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the HTML content
        const html = await page.content();

        // Create directory structure for the route
        const routePath = route === '/' ? '/index' : route;
        const filePath = path.join(distDir, routePath, 'index.html');
        const dir = path.dirname(filePath);

        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(filePath, html);

        console.log(`✅ Generated: ${filePath}`);
      } catch (error) {
        console.error(`❌ Error prerendering ${route}:`, error.message);
      }
    }

    await browser.close();
    console.log('🎉 Prerendering complete!');
  } catch (error) {
    console.error('❌ Prerendering failed:', error.message);
    throw error;
  } finally {
    // Clean up: close browser and kill the preview server
    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        console.error('Error closing browser:', e.message);
      }
    }

    if (previewServer) {
      console.log('🧹 Shutting down preview server...');
      previewServer.kill('SIGTERM');
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Force kill if still running
      try {
        previewServer.kill('SIGKILL');
      } catch (e) {
        // Ignore error if process already dead
      }
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  prerender().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { prerender };
