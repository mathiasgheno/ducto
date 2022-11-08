/**
 * @type {import('./endWith.types').EndWith }
 */
export const endWith = (value) => (subject) => {
  if (typeof subject !== 'string') {
    throw new Error(`The value ${subject} is not a string`);
  }
  const itDoes = subject.match(new RegExp(`${value}$`));
  if (!itDoes) {
    throw new Error(`The value ${subject} does not end with ${value}`);
  }
  return subject;
};
