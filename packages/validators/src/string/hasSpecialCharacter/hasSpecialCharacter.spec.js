import { hasSpecialCharacter } from './hasSpecialCharacter.js';

describe('hasSpecialCharacter', () => {
  it('should return true if the value has a special character', () => {
    const value = '!';
    expect(hasSpecialCharacter(value)).toBe(true);
  });

  it('should return false if the value does not have a special character', () => {
    const value = 'abc';
    expect(hasSpecialCharacter(value)).toBe(false);
  });
});
