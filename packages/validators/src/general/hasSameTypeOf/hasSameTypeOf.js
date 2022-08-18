import log from 'loglevel';

/**
 * @param {string} type
 * @returns {function(*): *}
 */
export const hasSameTypeOf = (type) => (value) => {
  log.info('hasSameTypeOf was been executed');
  log.debug({ type });
  log.debug({ value });
  const doesNot = typeof value !== type;
  if(doesNot) {
    throw new Error(`All value different of: ${type}`);
  }
  return value;
}
