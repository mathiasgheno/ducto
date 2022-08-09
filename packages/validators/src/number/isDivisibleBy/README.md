# isDivisableBy

- 📣 Throw error if not satisfied
- 📦 Curried Function
- 🦺 Pure Function


# How to use

With standard JavaScript

```js
import { isDivisableBy } from '@ducto/validators';

const isDivisibleByTwo = isDivisableBy(2);

isDivisableByTwo(4); // true
```

With Pipeline Operator

```js
import { isDivisableBy } from '@ducto/validators';

const isDivisibleByTwo = isDivisableBy(2);

2
  |> isDivisibleByTwo(#); // true
```
