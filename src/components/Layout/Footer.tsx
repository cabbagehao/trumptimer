import { Flag } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flag className="w-6 h-6" />
          <span className="font-bold text-xl">Trump Term Countdown 2029</span>
        </div>
        <p className="text-sm max-w-2xl mx-auto mb-8">
          Tracking Donald Trump's presidential term with real-time updates on policy changes, 
          executive orders, and major events shaping America's future.
        </p>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm">
            © {currentYear} Trump Term Countdown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}