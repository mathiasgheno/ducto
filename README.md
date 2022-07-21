
<p align="center">
  <img alt="Ducto" src="https://i.imgur.com/p70zxaD.png" width="480">
</p>

Ducto.js is an next generation of pipeline validator.

- ✅ Functional API
- ✅ Support for ECMAScript Pipeline Operator ([see docs](/docs/how-pipeline-operator.md))
- ✅ Support for ECMAScript Decorators (wip)

## Install

```bash
npm install @ducto/core @ducto/validators
```

## How to Use

In ducto you can provide multiples validators and if one of them fails, the whole pipeline fails. This approach is very useful when you want to validate a pipeline step by step.

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

# General Documentation

- [Avaliable Validators](/packages/validators/README.md);
- [How to use with Pipeline Operador](/docs/how-pipeline-operator.md);
- [How to use with Decorators](/docs/how-decorators.md);
