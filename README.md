
<p align="center">
  <img alt="Lerna" src="https://i.imgur.com/p70zxaD.png" width="480">
</p>

Ducto.js is an next generation of pipeline validator.

- ✅ Functional API
- ✅ Support for ECMAScript Pipeline Operator (WIP)
- ✅ Support for ECMAScript Decorators  (WIP)

## Install

```bash
npm install @ducto/core @ducto/validators
```

## How to Use

```javascript
import { ducto } from '@ducto/core';
import {
  isString,
  isNotNull,
  hasLessCharactersThan,
  hasMoreCharactersThan,
} from '@ducto/validators';

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
```
