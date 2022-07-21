# hasSameLengthOf

This validator checks if the length of the given value is the same as the length of the given other value.

#### Example Using Pipeline Operator

```javascript
import { hasSameLengthOf } from '@ducto/validators';

const movie = 'The Movie';
const years = 'The Years';

movie
  |> hasSameLengthOf(years)(#) // true

```

#### Example Without Pipeline Operator

```javascript
import { hasSameLengthOf } from '@ducto/validators';

const movie = 'The Movie';
const years = 'The Years';

hasSameLengthOf(years)(movie); // true
```
