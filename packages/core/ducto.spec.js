import { ducto } from './ducto.js';
import loglevel from 'loglevel';

loglevel.setLevel('debug');

describe('ducto', () => {
  const validator = value => {
    if(typeof value === 'string') {
      return value;
    } else {
      throw new Error('value must be a string');
    }
  }

  it('should not throw', () => {
    const isValid = ducto(validator)('test');
    expect(isValid).toEqual('test');
  });

  it('should throw', () => {
    expect(() => ducto(validator)(123)).toThrow({
      message: 'Error: value must be a string',
    });
  });

  xdescribe('when collecting all errors', () => {
    it('should throw an error', () => {
      expect(() => {
        ducto(validator)(10, { collectAllErrors: true })
      }).toThrowError();
    });

    it('should return all errors', () => {
      try {
        console.log(ducto(validator)(10, {collectAllErrors: true}));
      } catch (e) {
        console.log(e);
        console.log(e.debug);
        console.log(e.message);
      }
    });
  });
});
