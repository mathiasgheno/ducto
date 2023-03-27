import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isDivisibleBy.types').IsDivisibleBy}
 */
export const isDivisibleBy = (number) => (value) => {
  log.info('isDivisibleBy was called');
  log.debug(value);
  if(value % number !== 0) {
    throw new Error(`Value is not divisible by ${number}`);
  }
  return value;
}
