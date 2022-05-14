import log from 'loglevel';

class ValidatorError extends Error {
  constructor(error, debug) {
    super(error);
    this.name = 'ValidatorError';
    this.debug = debug;
  }
}


const reducer = (value, validator, index) => {
  try {
    return validator(value);
  } catch (error) {
    throw new ValidatorError(error, {
      validator: validator.name,
      receivedValue: value,
      valodatorQueue: index,
    });
  }
};

export const ducto = (...filters) => {
  log.info('ducto was been executed');
  log.debug(filters);
  return value => {
    log.info('Applying validators');
    log.debug(value);
    return filters.reduce(reducer, value);
  }
}
