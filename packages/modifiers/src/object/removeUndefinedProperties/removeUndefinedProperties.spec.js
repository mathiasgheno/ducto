import { removeUndefinedProperties } from './removeUndefinedProperties.js';

describe('removeUndefinedProperties', () => {
  test('should remove undefined properties', () => {
    const obj = {
      a: 1,
      b: undefined,
      c: 3,
    };
    const expected = {
      a: 1,
      c: 3,
    };
    expect(removeUndefinedProperties(obj)).toEqual(expected);
  });

  test('should note remove any property', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(removeUndefinedProperties(obj)).toEqual(obj);
  })
});
