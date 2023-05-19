export type IsNotNullProperty = (property: string) => (value: object) => boolean;

declare const isNotNullProperty: IsNotNullProperty;
