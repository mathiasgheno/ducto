export type EndWith = (value: string) => (subject: string) => string;

declare const endWith: EndWith;
