export const INAUGURATION_DATE = new Date('2025-01-20T17:00:00.000Z'); // 12:00 EST

export function calculateTimeRemaining(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date();
  const difference = INAUGURATION_DATE.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, '0');
}

export function hasEventPassed(eventDate: Date): boolean {
  return new Date() > eventDate;
}