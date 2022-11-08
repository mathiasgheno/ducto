import { hasLessCharactersThan } from './hasLessCharactersThan.js';

describe('hasLessCharactersThan', () => {
  test('should throw an error', () => {
    expect(() => hasLessCharactersThan(5)('letsgo')).toThrowError();
  });

  test('should not throw an error and should return the value', () => {
    expect(hasLessCharactersThan(5)('lets')).toEqual('lets');
  });
})
