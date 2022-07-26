import log from 'loglevel';

/**
 * @param {'number'|'string'|'array'|'object'|'boolean'|'undefined'} condition
 * @returns {function(...[*]): [*]}
 */
export const hasSameTypeOf = (condition) => (...args) => {
  log.info('hasSameTypeOf was been executed');
  log.debug({ condition });
  log.debug({ args });
  const doesNot = args.some(arg => typeof arg !== condition);
  if(doesNot) {
    throw new Error(`All value different of: ${condition}`);
  }
  return args;
}
