import { isString } from '../isString/isString.js';
import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isUpperCase.types').IsUpperCase}
 */
export const isUpperCase = (value) => {
  log.debug('isUpperCase was called');
  isString(value);
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
  const numbers = /\d/g;
  const regex = /^[A-Z]+$/;
  const justLetters = value
    .replace(specialChars, '')
    .replace(numbers, '')
    .replace(/\s/g, '');
  log.debug(`Validating: ${justLetters}`);
  if(!regex.test(justLetters)) {
    throw new Error(`Value is not upper case`);
  }
  return value;
}
