import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

interface SignUpFormProps {
  onSubmit: (email: string, password: string, nickname: string) => Promise<void>;
  loading: boolean;
}

export default function SignUpForm({ onSubmit, loading }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nicknameError) return;
    await onSubmit(email, password, nickname);
  };

  const validateNickname = (value: string) => {
    if (value.length < 2 || value.length > 30) {
      return 'Nickname must be between 2 and 30 characters';
    }
    if (/[\s*]/.test(value)) {
      return 'Spaces and asterisks are not allowed';
    }
    return '';
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setNicknameError(validateNickname(value));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 text-gray-900 bg-white focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nickname
        </label>
        <div className="relative">
          <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className={`pl-10 block w-full rounded-md border-gray-300 text-gray-900 bg-white focus:ring-red-500 focus:border-red-500 ${
              nicknameError ? 'border-red-500' : ''
            }`}
            required
            minLength={2}
            maxLength={30}
            placeholder="Choose a nickname (2-30 characters)"
          />
        </div>
        {nicknameError && (
          <p className="mt-1 text-sm text-red-600">{nicknameError}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 block w-full rounded-md border-gray-300 text-gray-900 bg-white focus:ring-red-500 focus:border-red-500"
            required
            minLength={6}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !!nicknameError}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  );
}