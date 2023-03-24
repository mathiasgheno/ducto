import { ducto } from '@ducto/core';
import {
  isString,
  isNotNull,
  hasLessCharactersThan,
  hasMoreCharactersThan,
} from '@ducto/validators';

import {
  removeNullishItems
} from '@ducto/modifiers';

import log from 'loglevel';
import assert from 'node:assert';

log.setLevel('debug');

const validator = ducto(
  isNotNull,
  isString,
  hasLessCharactersThan(100),
  hasMoreCharactersThan(10),
)

assert.throws(() => validator('mathiasgheno'));

assert.throws(() => validator('mathias'));

const modifier = ducto(
  removeNullishItems,
);

assert.deepStrictEqual(modifier([1, 2, 3, null, undefined]), [1, 2, 3]);
