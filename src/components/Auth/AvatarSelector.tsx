import React from 'react';
import { Check } from 'lucide-react';

const AVATAR_OPTIONS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Molly',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Rocky',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Daisy',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Duke',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Coco',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Bear',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Ruby',
];

interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelect: (url: string) => void;
}

export default function AvatarSelector({ selectedAvatar, onSelect }: AvatarSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Choose Avatar
      </label>
      <div className="grid grid-cols-5 gap-2">
        {AVATAR_OPTIONS.map((url) => (
          <button
            key={url}
            onClick={() => onSelect(url)}
            className={`relative rounded-lg overflow-hidden aspect-square ${
              selectedAvatar === url ? 'ring-2 ring-red-600' : 'hover:ring-2 hover:ring-gray-300'
            }`}
          >
            <img src={url} alt="Avatar option" className="w-full h-full object-cover" />
            {selectedAvatar === url && (
              <div className="absolute inset-0 bg-red-600 bg-opacity-20 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}