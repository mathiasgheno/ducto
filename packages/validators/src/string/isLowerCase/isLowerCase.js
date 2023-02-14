import { isString } from '../isString/isString.js';
import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isLowerCase.types').IsLowerCase}
 */
export const isLowerCase = (value) => {
  log.debug('isLowerCase was called');
  isString(value);
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
  const numbers = /\d/g;
  const justLetters = value
    .replace(specialChars, '')
    .replace(numbers, '')
    .replace(/\s/g, '')
  ;
  log.debug(`Validating: ${justLetters}`);
  const itDoes = justLetters.match(/^[^A-Z]+$/g);
  if(!itDoes) {
    throw new Error(`Value is not lower case`);
  }
  return value;
}
