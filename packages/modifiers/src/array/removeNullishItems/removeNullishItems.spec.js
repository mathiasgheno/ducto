import { removeNullishItems } from './removeNullishItems.js';

describe('removeNullishItems', () => {
  it('should remove nullish items from array', () => {
    const array = [1, 2, 3, null, undefined, '', false, 0, NaN];
    const result = removeNullishItems(array);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should not remove nullish items from array if they are not nullish', () => {
    const array = [1, 2, 3, 'a'];
    const result = removeNullishItems(array);
    expect(result).toEqual([1, 2, 3, 'a']);
  });

  it('should recursively remove nullish items from array', () => {
    const array = [1, 2, 3, [4, 5, 6, null, undefined, '', false, 0, NaN]];
    const result = removeNullishItems(array);
    expect(result).toEqual([1, 2, 3, [4, 5, 6]]);
  });

  it('should not remove nullish items from array if they are not nullish for subarrays', () => {
    const array = [1, 2, 3, [4, 5, 'a']];
    const result = removeNullishItems(array);
    expect(result).toEqual([1, 2, 3, [4, 5, 'a']]);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => removeNullishItems('a')).toThrow();
  });
});
