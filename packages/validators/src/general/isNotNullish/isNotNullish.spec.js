import { isNotNullish } from './isNotNullish.js';

describe('isNotNullish', () => {
  test('should return value for non-nullish value', () => {
    expect(isNotNullish(1)).toBe(1);
    expect(isNotNullish(0)).toBe(0);
    expect(isNotNullish(' ')).toBe(' ');
    expect(isNotNullish('')).toBe('');
    expect(isNotNullish({})).toEqual({});
    expect(isNotNullish([])).toEqual([]);
    expect(isNotNullish(NaN)).toEqual(NaN);
  });

  test('should throw error for nullish value', () => {
    expect(() => isNotNullish(null)).toThrowError('Value is nullish');
    expect(() => isNotNullish(undefined)).toThrowError('Value is nullish');
  });
});
