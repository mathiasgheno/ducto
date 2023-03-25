export type HasSameLengthOf<
  T = string
   | unknown[]
   | Map<unknown, unknown>
   | Set<unknown>
> = (other: T) => (value: T) => T;

declare const hasSameLengthOf: HasSameLengthOf;
