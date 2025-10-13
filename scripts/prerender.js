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

  // Wait for server to be ready
  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) {
        console.log('✅ Preview server ready');
        resolve();
      }
    });
  });

  return server;
}

async function prerender() {
  console.log('🚀 Starting SSG prerendering...');

  let previewServer = null;

  try {
    // Start the preview server
    previewServer = await startPreviewServer();

    // Wait a bit more to ensure server is fully ready
    await new Promise(resolve => setTimeout(resolve, 2000));

    const browser = await puppeteer.launch({ headless: true });
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
      console.error(`❌ Error prerendering ${route}:`, error);
    }
  }
  
    await browser.close();
    console.log('🎉 Prerendering complete!');
  } finally {
    // Clean up: kill the preview server
    if (previewServer) {
      console.log('🧹 Shutting down preview server...');
      previewServer.kill('SIGTERM');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  prerender().catch(console.error);
}

export { prerender };