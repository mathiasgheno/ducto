import { turnItemsIntoNumbers } from './turnItemsIntoNumbers.js';

describe('turnItemsIntoNumbers', () => {
  it('should turn all items into numbers', () => {
    const array = ['1', '2', '3'];
    const result = turnItemsIntoNumbers(array);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should not turn items into numbers if they are not numbers', () => {
    const array = ['1', '2', '3', 'a'];
    const result = turnItemsIntoNumbers(array);
    expect(result).toEqual([1, 2, 3, 'a']);
  });

  it('should recursively turn items into numbers', () => {
    const array = ['1', '2', '3', ['4', '5', '6']];
    const result = turnItemsIntoNumbers(array);
    expect(result).toEqual([1, 2, 3, [4, 5, 6]]);
  });

  it('should not turn items into numbers if they are not numbers for subarrays', () => {
    const array = ['1', '2', '3', ['4', '5', 'a']];
    const result = turnItemsIntoNumbers(array);
    expect(result).toEqual([1, 2, 3, [4, 5, 'a']]);
  });

  it('should throw an error if the argument is not an array', () => {
    expect(() => turnItemsIntoNumbers('a')).toThrow();
  });
});


