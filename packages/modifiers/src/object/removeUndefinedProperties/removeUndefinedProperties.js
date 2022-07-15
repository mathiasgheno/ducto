
export const removeUndefinedProperties = (obj) => {
  const newObj = { ...obj };
  return Object.keys(newObj).reduce((acc, key) => {
    if(newObj[key] === undefined) {
      delete newObj[key];
    }
    return newObj;
  }, {});
}
