import log from 'loglevel';

export const isString = (value) => {
  const possibleString = value;
  log.debug(`Receive ${possibleString} in isString`);
  const isNotString = typeof possibleString !== 'string';
  log.debug(`isNotString: ${isNotString}`);
  if(isNotString) {
    throw new Error(`Value is not an string`);
  }
  return value;
};
