# Duto

Duto.js is an next genation of pipeline validor.

- ✅ Functional API
- ✅ Support for ECMAScript Pipeline Operator
- ✅ Support for ECMAScript Decorators


## How to Use

```javascript
import { ducto, prop } from '@ducto/core';
import { isNotNull, isString, hasLessCharacteresThan, minimalNumberOfProps } from '@ducto/validators';

class Toggle {

  @ducto(toggle => (
    toggle
      |> prop('description', (description) => (
            description
              |> isNotNull
              |> isString
              |> hasLessCharacteresThan(1000)
         ))
      |> minimalNumberOfProps(10)
  ))
  insert(toggle) {
    
  }  
}
```

```javascript
import { pipeValidator, prop } from '@ducto/core';
import { isNotNull, isString, hasLessCharacteresThan, minimalNumberOfProps } from '@ducto/validators';

const descriptionPipeValidator = (description) => (
  description
    |> isNotNull
    |> isString
    |> hasLessCharacteresThan(1000)
)

class Toggle {

  @ducto(toggle => (
    toggle
      |> prop('description', descriptionPipeValidator)
      |> minimalNumberOfProps(10)
  ))
  insert(toggle) {
    // throw error bebore execute function
  }  
}
```
