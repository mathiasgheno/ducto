export const isNotUndefinedProperty = (prop) => obj => {
  if(obj[prop] === undefined) {
    throw new Error(`Property ${prop} is undefined`);
  }
  return obj;
};
