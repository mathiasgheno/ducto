export type HasLessCharactersThan = (desired: number) => (value: string) => string;

declare const hasLessCharactersThan: HasLessCharactersThan;
