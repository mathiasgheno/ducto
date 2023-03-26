import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isNotNull.types').IsNotNull}
 */
export const isNotNull = (value) => {
  log.info('isNotNull was called');
  log.debug(value);
  if(value === null) {
    throw new Error('Value is null');
  }
  return value;
}
