import log from 'loglevel';

export const isNotUndefined = (value) => {
  log.info('isNotUndefined was called');
  log.debug(value);
  if(value === undefined) {
    throw new Error('Value is undefined');
  }
  return value;
}
