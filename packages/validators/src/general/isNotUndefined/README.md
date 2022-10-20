# isNotUndefined

Check if the value is not undefined.

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

