import { contains } from './contains.js';

describe('constains', () => {
  it('should return an error', () => {
    const containsFoo = contains('foo');
    expect(() => containsFoo('abcd')).toThrow();
  });

  it('should not return an error', () => {
    expect(contains('foo')('foo bar baz')).toBe('foo bar baz');
  });
})
