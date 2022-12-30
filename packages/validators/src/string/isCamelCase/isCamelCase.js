import { isNotNullish } from '../../general/isNotNullish/isNotNullish.js';
import { pipe } from '../../shared/utils/validators.utils.js';
import { doesNotHaveSpecialChar } from '../doesNotHaveSpecialChar/doesNotHaveSpecialChar.js';

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

export const isCamelCase = (value) => {
  if(!value) {
    throw new Error('Value is nullish');
  }

  try {
    const validator = pipe(
      isNotNullish,
      isLowerCaseAt(0),
      isLowerCaseAt(value.length - 1),
      doesNotHaveUpperCaseCharSideBySide,
      doesNotHaveSpecialChar,
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
