/**
 * @nosideeffects
 * @type{import('./turnPropertiesValueIntoNumber.types').TurnPropertiesValueIntoNumber}
 */
export const turnPropertiesValueIntoNumber = (object) => {
  const newObject = { ...object };
  Object.keys(newObject).forEach((key) => {
    if(typeof newObject[key] === 'string' && !isNaN(newObject[key])) {
      newObject[key] = Number(newObject[key]);
    } else {
      const type = typeof newObject[key];
      if(type === 'object' || type === 'function') {
        newObject[key] = turnPropertiesValueIntoNumber(newObject[key]);
      }
    }
  });
  return newObject;
}
