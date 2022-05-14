import { ducto } from '@ducto/core';
import {
  isString,
  isNotNull,
  hasLessCharactersThan,
  hasMoreCharactersThan,
} from '@ducto/validators';
import log from 'loglevel';

// log.setLevel('debug');

const validator = ducto(
  isNotNull,
  isString,
  hasLessCharactersThan(100),
  hasMoreCharactersThan(10),
)

try {
  validator('mathiasgheno');
  console.log('all ok');
} catch (e) {
  console.log(e.message);
}

try {
  validator('mathias');
} catch (e) {
  console.log(e.message);
  console.log(e.debug);
}
