#!/usr/bin/env node

import puppeteer from 'puppeteer';
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
const BASE_URL = 'http://localhost:4173'; // Vite preview server

async function startPreviewServer() {
  console.log('🔧 Starting preview server...');
  const server = spawn('npm', ['run', 'preview'], {
    stdio: 'pipe',
    shell: true
  });

  // Collect output for debugging
  let output = '';
  server.stdout.on('data', (data) => {
    output += data.toString();
    console.log('[Preview Server]:', data.toString().trim());
  });

  server.stderr.on('data', (data) => {
    console.error('[Preview Server Error]:', data.toString().trim());
  });

  // Wait for server to be ready with timeout
  const serverReady = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Preview server start timeout (30s). Output:\n' + output));
    }, 30000);

    server.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) {
        clearTimeout(timeout);
        console.log('✅ Preview server ready');
        resolve();
      }
    });

    server.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    server.on('exit', (code) => {
      if (code !== null && code !== 0) {
        clearTimeout(timeout);
        reject(new Error(`Preview server exited with code ${code}`));
      }
    });
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
    browser = await puppeteer.launch({
      headless: true,
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
