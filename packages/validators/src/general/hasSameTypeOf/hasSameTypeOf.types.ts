export type HasSameTypeOf<T = unknown> = (other: T) => (value: T) => T;
