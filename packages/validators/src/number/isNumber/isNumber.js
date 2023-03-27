import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isNumber.types').IsNumber}
 */
export const isNumber = (value) => {
  log.info('Executing isNumber');
  log.debug(value);
  if(Number.isNaN(+value)) {
    throw new Error('Value is not a number');
  }
  return value;
}
