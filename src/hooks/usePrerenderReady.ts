import { useEffect } from 'react';

export function usePrerenderReady() {
  useEffect(() => {
    // Signal that the page is ready for prerendering
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        document.dispatchEvent(new Event('prerender-ready'));
      }
    }, 1000); // Wait 1 second for content to load

    return () => clearTimeout(timer);
  }, []);
}