export const SEO_KEYWORDS = {
  primary: [
    'trump presidency countdown',
    'trump term 2025-2029',
    'trump executive orders',
    'trump policy changes',
    'presidential term tracker',
    'trump news updates',
    'trump administration policies',
    'white house updates',
  ],
  secondary: [
    'trump presidency timeline',
    'trump executive actions',
    'presidential policy changes',
    'trump term highlights',
    'white house news',
    'trump administration updates',
    'america first policies',
    'trump term events',
  ],
  related: [
    'us policy changes',
    'international relations updates',
    'executive order tracking',
    'presidential decisions',
    'trump live updates',
    'white house announcements',
    'presidential term news',
    'trump administration achievements',
  ],
} as const;

export const SEO = {
  title: "Trump Presidential Term Countdown | Live Updates",
  description: "Track Trump's presidential term with real-time updates on major policy changes, executive orders, and key events shaping America's future.",
  domain: "trumptimer.us",
  url: "https://trumptimer.us",
  twitterHandle: "@TrumpTimer2025",
  ogImage: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...SEO_KEYWORDS.related].join(', '),
} as const;