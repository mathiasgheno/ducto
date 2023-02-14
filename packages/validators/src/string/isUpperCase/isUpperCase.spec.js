import { isUpperCase } from './isUpperCase.js';
import log from 'loglevel';

log.setLevel('debug');

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

  test('should throw error if value is not a string', () => {
    expect(() => isUpperCase(123)).toThrowError('Value is not an string');
  });

  it('should return the value if it is a setence in upper case with numbers', () => {
    const text = 'MY NAME IS MATHIAS, I AM 26 YEARS OLD';
    expect(isUpperCase(text)).toBe(text);
  });
});
