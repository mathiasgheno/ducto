import log from 'loglevel';

export const hasLessCharactersThan = (desired) => (value) => {
  log.info('Executing hasLessCharactersThan');
  log.debug(value);
  const size = value.length;
  if(size > desired) {
    throw new Error(`Value is bigger than ${desired} characteres`);
  }
  return value;
}
