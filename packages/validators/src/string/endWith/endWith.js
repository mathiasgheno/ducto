export const endWith = (endValue) => (value) => {
  if (typeof value !== 'string') {
    throw new Error(`The value ${value} is not a string`);
  }
  const itDoes = value.match(new RegExp(`${endValue}$`));
  if (!itDoes) {
    throw new Error(`The value ${value} does not end with ${endValue}`);
  }
  return value;
};
