import log from 'loglevel';

export const isPrecisionOf = (precision) => (value) => {
  log.info('isPrecisionOf was called');
  log.debug(value);
  if(Number.isNaN(value)) {
    throw new Error('Value is not a number');
  }
  if(value.toString().split('.')[1].length > precision) {
    throw new Error('Value is not a precision of ' + precision);
  }
  return value;
}

// isPrecisionOf(10)(0) //true
// isPrecisionOf(10.1010)(4) //true
// isPrecisionOf(10.1010)(2) //false
