import { Facebook, Share2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { calculateTimeRemaining } from '../utils/dateUtils';
import { generateShareImage } from '../utils/imageGenerator';
import FeedbackButton from './Feedback/FeedbackButton';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = async (platform: SocialPlatform) => {
    const time = calculateTimeRemaining();
    const shareText = `🇺🇸 Trump Presidential Term Countdown:\n${time.days} days, ${time.hours} hours, ${time.minutes} minutes remaining\n#Trump2029`;
    
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
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-red-600 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle share buttons"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Share Buttons */}
      <div 
        className={`
          fixed bottom-24 right-4 flex flex-col gap-2 z-40
          lg:bottom-auto lg:right-4 lg:left-auto lg:top-1/2 lg:-translate-y-1/2 
          lg:flex lg:flex-col lg:gap-2 p-4 
          ${isOpen ? 'flex' : 'hidden lg:flex'}
        `}
      >
        {/* Mobile Feedback Button */}
        <div className="lg:hidden">
          <FeedbackButton isMobile isOpen={isOpen} />
        </div>

        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleShare(platform)}
            className={`flex items-center justify-center gap-2 ${platform.className} text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl`}
            title={`Share on ${platform.name}`}
          >
            {platform.icon}
            <span className="text-sm sm:text-base hidden sm:inline">Share on {platform.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}