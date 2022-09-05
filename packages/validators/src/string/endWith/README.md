# endWith

- 📣 Throw error if not satisfied
- 🦺 Pure Function

Validates if the string ends with the value passed as parameter.

### Example Using Pipeline Operator

```js
import { endWith } from '@ducto/validators';

'hello world'
  |> endWith('world')(#); // not throw error
```

### Example Without Pipeline Operator

```js
import { endWith } from '@ducto/validators';

endWith('world')('hello world'); // not throw error
```
