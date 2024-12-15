import { Flag } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Flag className="w-8 h-8 text-white" />
        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
      </div>
      <span className="font-bold text-xl">Inauguration 2025</span>
    </div>
  );
}