import { doesNotHaveSpecialChar } from './doesNotHaveSpecialChar.js';

describe('doesNotHaveSpecialChar', () => {
  it('should throw an error for special char', () => {
    expect(() => doesNotHaveSpecialChar('#')).toThrowError();
    expect(() => doesNotHaveSpecialChar('!')).toThrowError();
    expect(() => doesNotHaveSpecialChar('>')).toThrowError();
    expect(() => doesNotHaveSpecialChar('<')).toThrowError();
    expect(() => doesNotHaveSpecialChar('$')).toThrowError();
    expect(() => doesNotHaveSpecialChar('(')).toThrowError();
    expect(() => doesNotHaveSpecialChar(')')).toThrowError();
    expect(() => doesNotHaveSpecialChar('-')).toThrowError();
    expect(() => doesNotHaveSpecialChar('_')).toThrowError();
  });

  it('should not throw an error for non special char', () => {
    expect(() => doesNotHaveSpecialChar('a')).not.toThrowError();
    expect(() => doesNotHaveSpecialChar('A')).not.toThrowError();
    expect(() => doesNotHaveSpecialChar('1')).not.toThrowError();
    expect(() => doesNotHaveSpecialChar('a1')).not.toThrowError();
    expect(() => doesNotHaveSpecialChar('a1A')).not.toThrowError();
  });
});
