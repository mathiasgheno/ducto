import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isNotNullish.types').IsNotNullish}
 */
export const isNotNullish = (value) => {
  log.info('isNotNullish was called');
  log.debug(value);
  if(value === null || value === undefined) {
    throw new Error('Value is nullish');
  }
  return value;
}
