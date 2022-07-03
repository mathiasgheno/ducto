import log from 'loglevel';

export const isNotNullish = (value) => {
  log.info('isNotNullish was called');
  log.debug(value);
  if(value !== null || value !== undefined) {
    throw new Error('Value is nullish');
  }
  return value;
}
