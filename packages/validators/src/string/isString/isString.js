import log from 'loglevel';

export const isString = (value) => {
  const possibleString = value;
  log.debug(`Receive ${possibleString} in isString`);
const isNot = typeof possibleString !== 'string';
  log.debug(`isNot: ${isNot}`);
  if(isNot) {
    throw new Error(`Value is not an string`);
  }
  return value;
};
