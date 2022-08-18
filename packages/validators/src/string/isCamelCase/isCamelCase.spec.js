import { isCamelCase } from './isCamelCase.js';

describe('isCamelCase', () => {
  test('should not throw for camelCase', () => {
    expect(isCamelCase('camelCase'));
  });

  test('should throw error for CamelCase', () => {
    expect(() => expect(isCamelCase('camelCase'))).toThrowError();
  });

  test('should throw error for cameLCase', () => {
    expect(() => expect(isCamelCase('cameLCase'))).toThrowError();
  });

  test('should throw error for camelCASETest', () => {
    expect(() => expect(isCamelCase('camelCASETest'))).toThrowError();
  });
});
