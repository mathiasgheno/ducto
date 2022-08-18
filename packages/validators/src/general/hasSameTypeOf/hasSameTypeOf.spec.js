import { hasSameTypeOf } from './hasSameTypeOf.js';

describe('hasSameTypeOf', () => {
  describe('when strings', () => {
    it('should throw an error if all arguments have different type', () => {
      const result = hasSameTypeOf('string');
      expect(() => result(1)).toThrowError();
    });

    it('should not throw', () => {
      const result = hasSameTypeOf('string');
      expect(result('1')).toEqual('1');
    });
  })

  describe('when numbers', () => {
    it('should throw for different type', () => {
      const result = hasSameTypeOf('number');
      expect(() => result('1')).toThrowError();
    });

    it('should not throw', () => {
      const result = hasSameTypeOf('number');
      expect(result(1)).toEqual(1);
    });
  });
});
