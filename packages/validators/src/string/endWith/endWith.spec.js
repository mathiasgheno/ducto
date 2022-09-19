import { endWith } from './endWith.js';

fdescribe('endWith', () => {
  it('should return a function', () => {
    expect(typeof endWith('')).toBe('function');
  });

  it('should return a function that returns the value when the value ends with the endValue', () => {
    const endWithValue = endWith('value');
    expect(endWithValue('value')).toBe('value');
    expect(endWithValue('some value')).toBe('some value');
  });

  it('should throw an error when the value does not end with the endValue', () => {
    const endWithValue = endWith('value');
    expect(() => endWithValue('some')).toThrowError('The value some does not end with value');
  });

  it('should throw an error when the value is not a string', () => {
    const endWithValue = endWith('value');
    expect(() => endWithValue(1)).toThrowError('The value 1 is not a string');
  });
});
