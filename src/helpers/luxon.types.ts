export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type FirstWeekContainsDate = 1 | 4;

export interface StartOfWeekOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, ...
}

export interface EndOfWeekOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface FormatOptions {
  locale?: any; // можно уточнить, если ты используешь конкретные локали
  timeZone?: string; // для Luxon
}

export interface Interval {
  start: Date | string;
  end: Date | string;
}

export interface GetWeekOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: number;
  locale?: any;
}

export interface GetMonthOptions {
  // обычно не используется в date-fns напрямую, но можно определить
  locale?: any;
}

export interface GetYearOptions {
  // аналогично, placeholder для симметрии
  locale?: any;
}

export interface DateFnsCompat {
    addDays(date: Date | string, amount: number): Date;
    addMonths(date: Date | string, amount: number): Date;
    addWeeks(date: Date | string, amount: number): Date;
    addYears(date: Date | string, amount: number): Date;
  
    differenceInCalendarDays(dateLeft: Date | string, dateRight: Date | string): number;
    differenceInCalendarMonths(dateLeft: Date | string, dateRight: Date | string): number;
  
    eachMonthOfInterval(interval: { start: Date | string; end: Date | string }): Date[];
  
    endOfISOWeek(date: Date | string): Date;
    endOfMonth(date: Date | string): Date;
    endOfWeek(date: Date | string): Date;
    endOfYear(date: Date | string): Date;
  
    format(date: Date | string, formatStr: string): string;
  
    getISOWeek(date: Date | string): number;
    getMonth(date: Date | string): number;
    getWeek(date: Date | string): number;
    getYear(date: Date | string): number;
  
    isAfter(date: Date | string, dateToCompare: Date | string): boolean;
    isBefore(date: Date | string, dateToCompare: Date | string): boolean;
    isDate(value: any): boolean;
    isSameDay(dateLeft: Date | string, dateRight: Date | string): boolean;
    isSameMonth(dateLeft: Date | string, dateRight: Date | string): boolean;
    isSameYear(dateLeft: Date | string, dateRight: Date | string): boolean;
  
    max(dates: (Date | string)[]): Date;
    min(dates: (Date | string)[]): Date;
  
    setMonth(date: Date | string, month: number): Date;
    setYear(date: Date | string, year: number): Date;
  
    startOfDay(date: Date | string): Date;
    startOfISOWeek(date: Date | string): Date;
    startOfMonth(date: Date | string): Date;
    startOfWeek(date: Date | string): Date;
    startOfYear(date: Date | string): Date;
  }
  