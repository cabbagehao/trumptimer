export interface TimelineEvent {
  date: Date;
  title: string;
  description: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export * from './analytics';