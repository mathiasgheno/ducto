import { isLowerCase } from './isLowerCase.js';

describe('isLowerCase', () => {
  it('should throw an error if the value is not a string', () => {
    expect(() => isLowerCase(1)).toThrow();
  });

  it('should throw an error if the value is not lower case', () => {
    expect(() => isLowerCase('A')).toThrow();
  });

  it('should return the value if it is lower case', () => {
    expect(isLowerCase('a')).toBe('a');
  });

  it('should return the value if it is a setence in lower case', () => {
    const text = 'my name is mathias';
    expect(isLowerCase(text)).toBe(text);
  });

  it('should return the value if it is a setence in lower case with numbers', () => {
    const text = 'my name is mathias, i am 26 years old';
    expect(isLowerCase(text)).toBe(text);
  });
});
