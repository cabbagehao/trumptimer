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

export const PAGE_SEO = {
  home: {
    title: "Trump Presidential Term Countdown",
    description: "Track Trump's presidential term with real-time updates on major policy changes, executive orders, and key events shaping America's future.",
    keywords: "trump presidency countdown, trump term 2025-2029, presidential term tracker"
  },
  about: {
    title: "About Donald Trump",
    description: "Learn about Donald Trump, the 47th President of the United States. Biography, political career, and key achievements during his presidency.",
    keywords: "donald trump biography, 47th president, trump political career, trump achievements"
  },
  policies: {
    title: "Trump Policies 2025-2029",
    description: "Comprehensive overview of Donald Trump's presidential policies, executive orders, and major initiatives during his 2025-2029 term.",
    keywords: "trump policies, trump executive orders, trump initiatives, presidential policies 2025"
  },
  quotes: {
    title: "Donald Trump's Notable Quotes",
    description: "Collection of Donald Trump's most memorable quotes, speeches, and statements from his presidency and political career.",
    keywords: "trump quotes, trump speeches, presidential quotes, trump statements"
  },
  termCountdown: {
    title: "Trump Term Countdown",
    description: "Real-time countdown tracking Trump's presidential term end date, key milestones, and achievements during his 2025-2029 presidency.",
    keywords: "trump term countdown, trump presidency end date, presidential term tracker, trump term milestones, when does trump term end, trump presidency timeline"
  },
  speeches: {
    title: "Donald Trump's Notable Speeches",
    description: "Complete collection of Donald Trump's presidential speeches, addresses, and public statements during his 2025-2029 term.",
    keywords: "trump speeches, presidential addresses, trump public statements, political speeches"
  },
  inauguration: {
    title: "Trump Inauguration 2025",
    description: "Complete coverage of Donald Trump's 2025 presidential inauguration ceremony, schedule, participants, and historical significance.",
    keywords: "trump inauguration 2025, presidential inauguration, inauguration ceremony, trump swearing in"
  },
  president47: {
    title: "The 47th President",
    description: "Donald Trump as the 47th President of the United States. Historic return to office and presidency overview for 2025-2029.",
    keywords: "47th president, trump presidency, donald trump president, trump administration"
  }
} as const;