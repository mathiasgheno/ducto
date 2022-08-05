import { isNotUndefined } from './isNotUndefined.js';

describe('isNotUndefined', () => {
  it('should return the value if it is not undefined', () => {
    expect(isNotUndefined(1)).toBe(1);
    expect(isNotUndefined('1')).toBe('1');
    expect(isNotUndefined(true)).toBe(true);
    expect(isNotUndefined(false)).toBe(false);
    expect(isNotUndefined({})).toEqual({});
    expect(isNotUndefined([])).toEqual([]);
  })
})
