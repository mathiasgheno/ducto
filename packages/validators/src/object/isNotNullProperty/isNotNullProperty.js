export const isNotNullProperty = (prop) => obj => {
  if(obj[prop] === null) {
    throw new Error(`Property ${prop} is null`);
  }
  return obj;
};
