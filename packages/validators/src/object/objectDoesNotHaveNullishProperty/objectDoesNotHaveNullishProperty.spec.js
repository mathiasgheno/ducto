import { objectDoesNotHaveNullishProperty } from './objectDoesNotHaveNullishProperty.js';

describe('objectDoesNotHaveNullishProperty', () => {
  test('should throw if any property is null', () => {
    expect(() => {
      const obj = {
        name: 'nadine',
        age: null,
      }
      const validator = objectDoesNotHaveNullishProperty(obj);
      validator();
    }).toThrowError();
  });

  test('should throw if any property is undefined', () => {
    expect(() => {
      const obj = {
        name: 'nadine',
        age: undefined,
      }
      const validator = objectDoesNotHaveNullishProperty(obj);
      validator();
    }).toThrowError();
  })
});
