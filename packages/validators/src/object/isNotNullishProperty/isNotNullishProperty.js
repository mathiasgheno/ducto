export const isNotNullishProperty = (prop) => obj => {
  if(obj[prop] === undefined || obj[prop] === null) {
    throw new Error(`Property ${prop} is undefined`);
  }
  return obj;
};
