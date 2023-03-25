export type HasMoreCharactersThan = (desired: number) => (value: string) => string;

declare const hasMoreCharactersThan: HasMoreCharactersThan;
