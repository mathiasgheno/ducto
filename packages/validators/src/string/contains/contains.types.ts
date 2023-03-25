export type Contains = (match: string | RegExp) => (subject: string) => string;

declare const contains: Contains;
