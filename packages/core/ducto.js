import log from 'loglevel';

class ValidatorError extends Error {
  constructor(error, debug) {
    super(error);
    this.name = 'ValidatorError';
    this.debug = debug;
  }
}


const reducerDefault = (value, validator, index) => {
  try {
    return validator(value);
  } catch (error) {
    throw new ValidatorError(error, {
      validator: validator.name,
      receivedValue: value,
      validatorQueue: index,
    });
  }
};

const reducerCollector = ({ value, errors }, validator, index, validators) => {
  try {
    const newValue = validator(value);
    return {
      value: newValue,
      errors: [...errors],
    };
  } catch (error) {
    const newError = new ValidatorError(error, {
      validator: validator.name,
      receivedValue: value,
      validatorQueue: index,
    });

    return {
      value: value,
      errors: [...errors, newError],
    };
  }
};

export const ducto = (...filters) => {
  log.info('ducto was been executed');
  log.info('number of filters: ', filters.length);
  log.debug(filters);
  return (value, configs = {}) => {
    log.info('Applying validators');
    log.debug('Configs for validator:', configs);
    log.debug(value);
    if(configs.collectAllErrors) {
      return filters.reduce(reducerCollector, { value, errors: [] });
    }
    return filters.reduce(reducerDefault, value);
  }
}
