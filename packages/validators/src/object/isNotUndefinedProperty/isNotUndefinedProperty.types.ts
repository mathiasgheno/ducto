export type IsNotUndefinedProperty = (property: string) => (value: object) => boolean;

declare const isNotUndefinedProperty: IsNotUndefinedProperty;
