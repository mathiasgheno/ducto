import { hasSameTypeOf } from './hasSameTypeOf.js';

describe('hasSameTypeOf', () => {
  describe('when only inputed strings', () => {
    it('should throw an error if all arguments have different type', () => {
      const array = ['1', '1'];
      const result = hasSameTypeOf('number');
      expect(() => result(...array)).toThrowError();
    });

    it('should return the original array if all the value have the same type', () => {
      const array = ['1', '1'];
      const result = hasSameTypeOf('string');
      expect(result(...array)).toEqual(array);
    });
  })

  describe('when mixed stings and numbers', () => {
    it('should throw an error if all arguments have different type', () => {
      const array = ['1', 1];
      const result = hasSameTypeOf('number');
      expect(() => result(...array)).toThrowError();
    });

    it('should return the original array if all the value have the same type', () => {
      const array = ['1', 1];
      const result = hasSameTypeOf('string');
      expect(() => result(...array)).toThrowError();
    });
  });

  describe('when only inputed numbers', () => {
    it('should throw an error if all arguments have different type', () => {
      const array = [1, 1];
      const result = hasSameTypeOf('string');
      expect(() => result(...array)).toThrowError();
    });

    it('should return the original array if all the value have the same type', () => {
      const array = [1, 1];
      const result = hasSameTypeOf('number');
      expect(result(...array)).toEqual(array);
    });
  });
});
