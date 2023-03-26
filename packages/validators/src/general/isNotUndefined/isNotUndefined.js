import log from 'loglevel';

/**
 * @nosideeffects
 * @type {import('./isNotUndefined.types').IsNotUndefined}
 */
export const isNotUndefined = (value) => {
  log.info('isNotUndefined was called');
  log.debug(value);
  if(value === undefined) {
    throw new Error('Value is undefined');
  }
  return value;
}
