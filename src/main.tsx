import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initBaiduAnalytics } from './utils/analytics';
import './index.css';

// Initialize Baidu Analytics
initBaiduAnalytics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);