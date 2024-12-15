import { CountdownTime } from '../types';

export async function generateShareImage(timeRemaining: CountdownTime): Promise<Blob> {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  // Set canvas dimensions
  canvas.width = 1200;
  canvas.height = 630;
  
  // Set background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#dc2626');
  gradient.addColorStop(1, '#991b1b');
  ctx.fillStyle = gradient;
  ctx.globalAlpha = 0.1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
  
  // Add title
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 60px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('Presidential Inauguration', canvas.width / 2, 150);
  ctx.fillText('Countdown 2025', canvas.width / 2, 230);
  
  // Add countdown numbers
  ctx.font = 'bold 120px system-ui';
  ctx.fillStyle = '#dc2626';
  const countdownText = `${timeRemaining.days}:${String(timeRemaining.hours).padStart(2, '0')}:${String(timeRemaining.minutes).padStart(2, '0')}:${String(timeRemaining.seconds).padStart(2, '0')}`;
  ctx.fillText(countdownText, canvas.width / 2, 400);
  
  // Add labels
  ctx.font = '32px system-ui';
  ctx.fillStyle = '#4b5563';
  ctx.fillText('DAYS : HOURS : MINUTES : SECONDS', canvas.width / 2, 450);
  
  // Convert canvas to blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob!);
    }, 'image/png');
  });
}