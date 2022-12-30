import { isPascalCase } from './isPascalCase.js';

describe('isPascalCase', () => {
  it('should throw an error if the value is not a string', () => {
    expect(() => isPascalCase(1)).toThrow();
  });

  it('should throw an error if the value is not pascal case', () => {
    expect(() => isPascalCase('a')).toThrow();
  });

  it('should throw an error if the value is camelCase', () => {
    expect(() => isPascalCase('myName')).toThrow();
  });

  it('should return the value if it is a setence in pascal case', () => {
    const text = 'MyNameIsMathias';
    expect(isPascalCase(text)).toBe(text);
  });

  it('should return the value if it is a setence in pascal case with numbers', () => {
    const text = 'MyNameIsMathiasIAm26YearsOld';
    expect(isPascalCase(text)).toBe(text);
  });

  it('should return the value for interface example', () =>{
    const text = 'IUser';
    expect(isPascalCase(text)).toBe(text);
  });

  it('shoud return error if has special characters', () => {
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld!')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld$')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld#')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld.')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld,')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld>')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld<')).toThrow();
    expect(() => isPascalCase('MyNameIsMathiasIAm26YearsOld ')).toThrow();
  });
});
