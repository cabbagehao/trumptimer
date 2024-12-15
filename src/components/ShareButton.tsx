import { Share2 } from 'lucide-react';
import { calculateTimeRemaining } from '../utils/dateUtils';

export default function ShareButton() {
  const handleShare = () => {
    const time = calculateTimeRemaining();
    const shareText = `🇺🇸 Countdown to Inauguration Day 2025:\n${time.days} days, ${time.hours} hours, ${time.minutes} minutes\n#Inauguration2025`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-colors"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Share on X
    </button>
  );
}