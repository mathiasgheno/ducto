/**
 * @nosideeffects
 * @type {import('./isDashCase.types').IsDashCase}
 */
export const isDashCase = value => {
  if (typeof value !== 'string') {
    throw new Error(`The value ${value} is not a string`);
  }
  const itDoes = value.match(/(^[a-z]{1,})(-[a-z]{1,})*$/);
  if (!itDoes) {
    throw new Error(`The value ${value} is not dash case`);
  }
  return value;
}
