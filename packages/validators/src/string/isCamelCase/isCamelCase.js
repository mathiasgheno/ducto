import { isNotNullish } from '../../general/isNotNullish/isNotNullish.js';

export const isLowerCaseAt = (value) => (charLength = 1) => {
  if(value[charLength].match(/^[A-Z]/)) {
    throw new Error('First character is not uppercase');
  }
  return value;
}

export const doesNotHaveUpperCaseCharSideBySide = (value) => {
  const regex = /[A-Z]{2,}/;
  if(regex.test(value)) {
    throw new Error('Upper case side by side');
  }
  return value;
}

// TODO use pipe in the validations

export const isCamelCase = (value) => {
  if(!value) {
    throw new Error('Value is nullish');
  }

  try {
    isNotNullish(value);
    isLowerCaseAt(0)(value);
    isLowerCaseAt(value.length - 1)(value);
    doesNotHaveUpperCaseCharSideBySide(value);
  } catch {
    throw new Error('Value is not camel case');
  }

  return value;
}

//isCamelCase('camelCase'); // true
//isCamelCase('camelcase'); // false

// console.log('CamelCaseNEwExample'.split(''));
// console.log('aAA'.match(/[A-Z]/g));
// console.log('aAA'.replace(/([A-Z])([A-Z])/g), '$1$2'));
// console.log(doesNotHaveUpperCaseSideBySide('aAaA'));
// console.log(isCamelCase('camelCase')); // true
// console.log(isCamelCase('camelcase'));
