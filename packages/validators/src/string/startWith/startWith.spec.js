import { startWith } from './startWith.js';

describe('startWith', () => {
  it('should return the value if it starts with the given string', () => {
    const value = 'Hello World';
    const result = startWith('Hello')(value);
    expect(result).toBe(value);
  });

  it('should throw an error if the value is not a string', () => {
    const value = 123;
    expect(() => startWith('Hello')(value)).toThrow();
  });

  it('should throw an error if the value does not start with the given string', () => {
    const value = 'Hello World';
    expect(() => startWith('World')(value)).toThrow();
  });
});
