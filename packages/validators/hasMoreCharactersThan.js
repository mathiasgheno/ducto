import log from 'loglevel';

export const hasMoreCharactersThan = (desired) => (value) => {
  log.info('Executing hasMoreCharactersThan');
  log.debug(value);
  const size = value?.length;
  if(size < desired) {
    throw new Error(`Value is not more then ${desired} characters`);
  }
  return value;
}
