
<p align="center">
  <img alt="Ducto" src="https://i.imgur.com/p70zxaD.png" width="480">
</p>



<div align="center">

<a href="">[![Node.js Tests CI](https://github.com/mathiasgheno/ducto/actions/workflows/node.js-tests.yml/badge.svg?branch=main)](https://github.com/mathiasgheno/ducto/actions/workflows/node.js-tests.yml)
</a>
<a href="">
<img alt="MIT Licensed" src="https://img.shields.io/github/license/mathiasgheno/ducto" />
</a>
</div>

Ducto.js is a collection of functions for validation and modification of data throught pipelining. 

- ✅ Functional API
- ✅ Support for ECMAScript Pipeline Operator ([see docs](/docs/how-pipeline-operator.md))

[//]: # (- ✅ Support for ECMAScript Decorators &#40;wip&#41;)

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

You can alse use it with the Pipeline Operator. Please [see the docs](/docs/how-pipeline-operator.md).

```javascript
import {
  isString,
  isNotNull,
  hasLessCharactersThan,
  hasMoreCharactersThan,
} from '@ducto/validators';

'mathiasgheno'
  |> isNotNull(#)
  |> isString(#)
  |> hasLessCharactersThan(100)(#)
  |> hasMoreCharactersThan(10)(#)
```


[//]: # (But, you can use the `ducto` to list all the errors. This approach can be helpful when you want to show the user all the errors, like when you have a list of demands for password.)

[//]: # ()

# General Documentation

- [Avaliable Validators](/packages/validators/README.md);
- [Avaliable Modifiers](/packages/modifiers/README.md);
- [How to use with Pipeline Operador](/docs/how-pipeline-operator.md);

[//]: # (- [How to use with Decorators]&#40;/docs/how-decorators.md&#41;;)
