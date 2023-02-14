import { isUpperCase } from './isUpperCase.js';

describe('isUpperCase', () => {
  test('should return value if value is upper case', () => {
    expect(isUpperCase('ABC')).toBe('ABC');
  });

  test('should return value if value is upper case with numbers', () => {
    expect(isUpperCase('1ABC123')).toBe('1ABC123');
  });

  test('should return value if value is upper case with special char', () => {
    expect(isUpperCase('!ABC*')).toBe('!ABC*');
  });

  test('should throw error if value is not upper case', () => {
    expect(() => isUpperCase('abc')).toThrowError('Value is not upper case');
  });

  test('should throw error if value is an empty string', () => {
    expect(() => isUpperCase('')).toThrowError('Value is not upper case');
  });
});
