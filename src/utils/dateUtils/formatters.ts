export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, '0');
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}