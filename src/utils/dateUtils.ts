import { INAUGURATION_DATE } from '../constants/dates';
import type { CountdownTime } from '../types';

export function calculateTimeRemaining(): CountdownTime {
  const now = new Date();
  const difference = INAUGURATION_DATE.getTime() - now.getTime();

  // If inauguration has passed, calculate time since inauguration
  if (difference < 0) {
    const timeSince = Math.abs(difference);
    return {
      days: Math.floor(timeSince / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeSince / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeSince / 1000 / 60) % 60),
      seconds: Math.floor((timeSince / 1000) % 60)
    };
  }

  // Otherwise, calculate time until inauguration
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, '0');
}

export function hasEventPassed(eventDate: Date): boolean {
  return new Date() > eventDate;
}

export function isInaugurationPassed(): boolean {
  return new Date() > INAUGURATION_DATE;
}