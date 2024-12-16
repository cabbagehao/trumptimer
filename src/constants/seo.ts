export const SEO_KEYWORDS = {
  primary: [
    'trump inauguration countdown',
    'donald trump inauguration 2025',
    'trump second inauguration',
    '47th president trump',
    'trump inauguration date',
    'presidential inauguration countdown',
    'trump 2024 victory',
    'trump biden election results',
  ],
  secondary: [
    'trump presidency countdown',
    'trump 2025 inauguration ceremony',
    'trump supporter events timeline',
    'historic trump election',
    'non-consecutive presidential terms',
    'trump inauguration speech preview',
    'trump 2025 policy direction',
    'trump inauguration events schedule',
  ],
  related: [
    'JD Vance vice president',
    '2024 presidential election results',
    'trump biden debate analysis',
    'international reaction trump victory',
    'trump inauguration live stream',
    'trump 2024 campaign promises',
    'trump inauguration tickets',
    'trump campaign success factors',
  ],
} as const;

export const SEO = {
  title: "Donald Trump Inauguration Countdown 2025 | Official Timeline",
  description: "Track the countdown to Donald Trump's 2025 Presidential Inauguration. Follow key events including Election Day, Electoral College voting, and Inauguration Day ceremonies.",
  domain: "trumptimer.us",
  url: "https://trumptimer.us",
  twitterHandle: "@TrumpTimer2025",
  ogImage: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...SEO_KEYWORDS.related].join(', '),
} as const;