# isCamelCase

- 📣 Throw error if not satisfied
- 🦺 Pure Function

Is goint to throw an error if the value is not camel case.

### Example Using Pipeline Operator

```js
import { isCamelCase } from '@ducto/validators';

'theShawshankRedemption'
  |> isCamelCase(#); // not throw error
```

### Example Without Pipeline Operator

```js
import { isCamelCase } from '@ducto/validators';

isCamelCase('theShawshankRedemption'); // not throw error
```
