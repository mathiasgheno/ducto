# isNotNullish

In JavaScript, `null` and `undefined` are considered to be `nullish` values. There are value like `0`, `''`, `false`, `NaN`, and `[]` that are considered falsy values. Nullish values can be helpful when you want to check for a value that can be `null` or `undefined` but is not a falsy value.

#### Example Using Pipeline Operator

```javascript
import { isNotNullish } from '@ducto/validators';

const movie = "The Shawshank Redemption";
const year = undefined;

movie
  |> isNotNullish(#) // true

year
  |> isNotNullish(#) // false
```

#### Example Without Pipeline Operator

```javascript
import { isNotNullish } from '@ducto/validators';

const movie = "The Shawshank Redemption";
const year = undefined;

isNotNullish(movie); // true
isNotNullish(year) // false
```

