import { contains } from './constains.js';

describe('constains', () => {
  it('should return an error', () => {
    expect(() => contains('fsoo')('foo bar baz')).toThrow();
  });

  it('should not return an error', () => {
    expect(contains('foo')('foo bar baz')).toBe('foo bar baz');
  });
})
