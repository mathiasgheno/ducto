# removeNullishItems

Removes nullish items from an array, recursively.

## Examples With Pipeline Operator

```javascript
import { removeNullishItems } from '@ducto/modifiers';

[1, 2, null, 3, undefined, 4, null, 5] |> removeNullishItems; // [1, 2, 3, 4, 5]
```

## Examples Without Pipeline Operator

```javascript
import { removeNullishItems } from '@ducto/modifiers';

removeNullishItems([1, 2, null, 3, undefined, 4, null, 5]); // [1, 2, 3, 4, 5]
```
