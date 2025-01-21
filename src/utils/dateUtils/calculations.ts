import { INAUGURATION_DATE } from '../../constants/dates';
import type { CountdownTime } from '../../types/time';

export function calculateTimeRemaining(): CountdownTime {
  const now = new Date();
  const difference = INAUGURATION_DATE.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function hasEventPassed(eventDate: Date): boolean {
  return new Date() > eventDate;
}

export function isInaugurationPassed(): boolean {
  return new Date() > INAUGURATION_DATE;
}