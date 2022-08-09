# isNumber

- 📣 Throw error if not satisfied
- 🦺 Pure Function

## How to use

With standard JavaScript

```js
import { isNumber } from '@ducto/validators';

isNumber(10); // not throw error
```

With Pipeline Operator

```js
import { isNumber } from '@ducto/validators';

10
  |> isNumber(#); // not throw error
```
