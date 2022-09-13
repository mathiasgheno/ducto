import { thereIsProperty } from './thereIsProperty.js';

describe('thereIsProperty', () => {
  test('should throw if property is undefined', () => {
    expect(() => {
      const obj = {
        name: 'nadine',
        age: undefined,
      }
      const validator = thereIsProperty('age')(obj);
      validator();
    }).toThrowError();
  })

  test('should not throw if property is not undefined', () => {
    expect(() => {
      const obj = {
        name: 'nadine',
        age: 10,
      }
      const validator = thereIsProperty('age')(obj);
      validator();
    }).not.toThrowError();
  })
});
