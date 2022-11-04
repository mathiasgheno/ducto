# isDashBase

- 📣 Throw error if not satisfied
- 🦺 Pure Function


Test if a string is dash-case.

### Exemple with pipeline operator

```js
import { isDashCase } from '@ducto/validators';

'foo-bar' |> isDashCase(#); // not throw error
```

### Example without pipeline operator

```js
import { isDashCase } from '@ducto/validators';

isDashCase('foo-bar'); // not throw error
```
