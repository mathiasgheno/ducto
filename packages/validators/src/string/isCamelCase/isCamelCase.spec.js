import { isCamelCase } from './isCamelCase.js';

describe('isCamelCase', () => {
  test('should not throw for camelCase', () => {
    expect(isCamelCase('camelCase'));
  });

  test('should throw error for CamelCase', () => {
    expect(() => expect(isCamelCase('CamelCase'))).toThrowError();
  });

  test('should throw error for cameLCase', () => {
    expect(() => expect(isCamelCase('cameLCase'))).toThrowError();
  });

  test('should throw error for camelCASETest', () => {
    expect(() => expect(isCamelCase('camelCASETest'))).toThrowError();
  });

  test('should throw error for dash-case', () => {
    expect(() => expect(isCamelCase('dash-case'))).toThrowError();
  });

  test('should throw error for underscore_case', () => {
    expect(() => expect(isCamelCase('underscore_case'))).toThrowError();
  });

  test('should throw error for underscore_case / snake_case', () => {
    expect(() => expect(isCamelCase('underscore_case'))).toThrowError();
  });
});
