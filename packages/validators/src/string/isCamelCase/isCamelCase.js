import { isNotNullish } from '../../general/isNotNullish/isNotNullish.js';

export const isLowerCaseAt = (charIndex = 1) => (value) => {
  const charValue = value[charIndex];
  if(charValue.match(/[A-Z]/)) {
    throw new Error(`Character at ${charIndex} is not lower case. Value is ${charValue}`);
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

export const doesNotHaveDash = (value) => {
  const regex = /-/g;
  if(value.match(regex)) {
    throw new Error('Value has dash');
  }
  return value;
}

export const doesNotHaveUnderscore = (value) => {
  const regex = /_/g;
  if(value.match(regex)) {
    throw new Error('Value has underscore');
  }
  return value;
}

// TODO use pipe in the validations

const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

export const isCamelCase = (value) => {
  if(!value) {
    throw new Error('Value is nullish');
  }

  try {
    const validator = pipe(
      isNotNullish,
      doesNotHaveDash,
      doesNotHaveUnderscore,
      isLowerCaseAt(0),
      isLowerCaseAt(value.length - 1),
      doesNotHaveUpperCaseCharSideBySide,
    );
    validator(value);
  } catch (e) {
    throw new Error('Value is not camelCase: ' + e.message);
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
