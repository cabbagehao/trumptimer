import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface AdUnitProps {
  adSlot: string;
  adFormat?: string;
  style?: React.CSSProperties;
}

export default function AdUnit({ adSlot, adFormat = 'auto', style }: AdUnitProps) {
  const advertRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    try {
      // Clean up previous ad
      if (advertRef.current) {
        advertRef.current.innerHTML = '';
      }

      // Push new ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, [location.pathname]); // Reload ad when route changes

  return (
    <ins
      ref={advertRef}
      className="adsbygoogle"
      style={style || { display: 'block' }}
      data-ad-client="ca-pub-4540467205535241"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}