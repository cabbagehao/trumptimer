import { Facebook, Share2 } from 'lucide-react';
import { calculateTimeRemaining } from '../utils/dateUtils';
import { generateShareImage } from '../utils/imageGenerator';

interface SocialPlatform {
  name: string;
  icon: JSX.Element;
  shareUrl: (text: string, url: string, imageUrl?: string) => string;
  className: string;
}

const platforms: SocialPlatform[] = [
  {
    name: 'X',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    shareUrl: (text, url, imageUrl) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}${imageUrl ? `&image=${encodeURIComponent(imageUrl)}` : ''}`,
    className: 'bg-black hover:bg-gray-800',
  },
  {
    name: 'Truth Social',
    icon: <Share2 className="w-5 h-5" />,
    shareUrl: (text, url, imageUrl) =>
      `https://truthsocial.com/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}${
        imageUrl ? `&image=${encodeURIComponent(imageUrl)}` : ''
      }`,
    className: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    shareUrl: (text, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    className: 'bg-[#1877F2] hover:bg-[#1664d8]',
  },
];

export default function SocialShare() {
  const handleShare = async (platform: SocialPlatform) => {
    const time = calculateTimeRemaining();
    const shareText = `🇺🇸 Countdown to Inauguration Day 2025:\n${time.days} days, ${time.hours} hours, ${time.minutes} minutes\n#Inauguration2025`;
    
    try {
      const imageBlob = await generateShareImage(time);
      const imageUrl = URL.createObjectURL(imageBlob);
      const shareUrl = platform.shareUrl(shareText, window.location.href, imageUrl);
      window.open(shareUrl, '_blank');
      
      setTimeout(() => {
        URL.revokeObjectURL(imageUrl);
      }, 60000);
    } catch (error) {
      console.error('Error generating share image:', error);
      const shareUrl = platform.shareUrl(shareText, window.location.href);
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:right-4 sm:bottom-auto sm:left-auto sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-2 p-4 bg-white sm:bg-transparent shadow-lg sm:shadow-none">
      {platforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => handleShare(platform)}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 ${platform.className} text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl`}
          title={`Share on ${platform.name}`}
        >
          {platform.icon}
          <span className="text-sm sm:text-base hidden sm:inline">Share on {platform.name}</span>
        </button>
      ))}
    </div>
  );
}