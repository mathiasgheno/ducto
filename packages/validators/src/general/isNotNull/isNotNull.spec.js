import { isNotNull } from './isNotNull';

describe('isNotNull', () => {
  test('should return true for non-null value', () => {
    expect(isNotNull(1)).toBe(1);
  });

  test('should return false for null value', () => {
    expect(() => isNotNull(null)).toThrowError('Value is null');
  });
});
