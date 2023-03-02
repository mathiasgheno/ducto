import { turnPropertiesValueIntoNumber } from './turnPropertiesValueIntoNumber.js';

describe('turnPropertiesValueIntoNumber', () => {
  it('should turn all properties value into number', () => {
    const object = {
      a: '1',
      b: '2',
      c: '3',
    };
    const newObject = turnPropertiesValueIntoNumber(object);
    expect(newObject).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('should not turn properties value into number if they are not a number', () => {
    const object = {
      a: '1',
      b: '2',
      c: '3',
      d: 'test',
    };
    const newObject = turnPropertiesValueIntoNumber(object);
    expect(newObject).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 'test',
    });
  });
});
