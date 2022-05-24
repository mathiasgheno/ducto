```javascript
import { ducto, prop } from '@ducto/core';
import { isNotNull, isString, hasLessCharactersThan, minimalNumberOfProps } from 'packages/validators/src/index';

class Toggle {

  @ducto(toggle => (
    toggle
      |> prop('description', (description) => (
          description
            |> isNotNull
            |> isString
            |> hasLessCharactersThan(1000)
      ))
      |> minimalNumberOfProps(10)
  ))
  insert(toggle) {

  }
}
```

```javascript
import {pipeValidator, prop} from '@ducto/core';
import {isNotNull, isString, hasLessCharactersThan, minimalNumberOfProps} from 'packages/validators/src/index';

const descriptionPipeValidator = (description) => (
  description
    |> isNotNull
    |> isString
    |> hasLessCharactersThan(1000)
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
