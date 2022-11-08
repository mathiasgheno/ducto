import log from 'loglevel';

/**
 * @type {import('./hasMoreCharactersThan.types').HasMoreCharactersThan}
 */
export const hasMoreCharactersThan = (desired) => (value) => {
  log.info('Executing hasMoreCharactersThan');
  log.debug(value);
  const size = value?.length;
  if(size < desired) {
    throw new Error(`Value is not more than ${desired} characters`);
  }
  return value;
}
