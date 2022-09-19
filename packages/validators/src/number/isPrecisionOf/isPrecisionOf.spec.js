import { isPrecisionOf } from './isPrecisionOf.js'

describe('isPrecisionOf', () => {
  it('should not throw for precision of zero', () => {
    expect(isPrecisionOf(0)(10)).toBe(10)
  });

  it('should not throw for precision of 4', () => {
    expect(isPrecisionOf(4)(10.1011)).toBe(10.1011)
  });

  it('should throw for wrong  precision of 2', () => {
    expect(() => isPrecisionOf(2)(10.1011)).toThrowError('Value is not a precision of 2')
  });
})
