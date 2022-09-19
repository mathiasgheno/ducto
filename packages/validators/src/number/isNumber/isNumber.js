import log from 'loglevel';

export const isNumber = (value) => {
  log.info('Executing isNumber');
  log.debug(value);
  if(Number.isNaN(+value)) {
    throw new Error('Value is not a number');
  }
  return value;
}
