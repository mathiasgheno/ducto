export type IsNotNullishProperty = (property: string) => (value: object) => boolean;

declare const isNotNullishProperty: IsNotNullishProperty;
