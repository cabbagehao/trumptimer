import { Flag, ExternalLink, FileText, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Flag className="w-6 h-6" />
          <span className="font-bold text-xl">Trump Term Countdown 2029</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">About</h3>
            <p className="text-sm text-gray-400">
              Tracking Donald Trump's presidential term with real-time updates on policy changes, 
              executive orders, and major events shaping America's future.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.donaldjtrump.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-center md:justify-start gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Official Website
                </a>
              </li>
              <li>
                <a 
                  href="https://truthsocial.com/@realDonaldTrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-center md:justify-start gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Truth Social
                </a>
              </li>
              <li>
                <a 
                  href="https://www.whitehouse.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center justify-center md:justify-start gap-2"
                >
                  <FileText className="w-4 h-4" />
                  White House
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Trump Term Countdown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}