import { thereIsProperty } from './thereIsProperty.js';

describe('thereIsProperty', () => {
  test('should throw if property is undefined', () => {
    expect(() => {
      thereIsProperty('age')({
        name: 'nadine',
        age: undefined,
      })
    }).toThrowError();
  })

  test('should not throw if property is not undefined', () => {
    expect(() => {
      thereIsProperty('age')({
        name: 'nadine',
        age: 10,
      });
    });
  })
});
