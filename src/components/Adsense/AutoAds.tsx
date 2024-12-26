import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AutoAds() {
  const location = useLocation();

  useEffect(() => {
    try {
      // Only push ads if they haven't been initialized
      if (window.adsbygoogle && !window.adsbygoogle.loaded) {
        window.adsbygoogle.push({
          google_ad_client: "ca-pub-4540467205535241",
          enable_page_level_ads: true
        });
        // Mark as loaded
        window.adsbygoogle.loaded = true;
      }
    } catch (error) {
      console.error('Error initializing AdSense:', error);
    }
  }, [location.pathname]);

  return null;
}