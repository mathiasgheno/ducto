import { isDashCase } from './isDashCase.js';

describe('isDashCase', () => {
  it('should return a function', () => {
    expect(isDashCase).toBeInstanceOf(Function);
  });

  it('should throw an error if the value is not a string', () => {
    expect(() => isDashCase(123)).toThrow();
  });

  it('should throw an error if the value is camelCase', () => {
    expect(() => isDashCase('camelCase')).toThrow();
  });

  it('should throw an error if the value is PascalCase', () => {
    expect(() => isDashCase('PascalCase')).toThrow();
  });

  it('should throw an error if the value is underscore_case', () => {
    expect(() => isDashCase('underscore_case')).toThrow();
  });

  it('should throw an error for "dash-case-"', () => {
    expect(() => isDashCase('dash-case-')).toThrow();
  });

  it('should return the value if it is dash case', () => {
    expect(isDashCase('dash-case')).toBe('dash-case');
  });
});
