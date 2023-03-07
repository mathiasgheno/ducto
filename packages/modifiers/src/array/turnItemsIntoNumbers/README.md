# turnItemsIntoNumbers

Turns all items in an array into numbers. If an item cannot be turned into a number, it will not be modified. This functions is recursive, so it will also turn items in nested arrays into numbers.


## Examples With Pipeline Operator

```javascript
import { turnItemsIntoNumbers } from '@ducto/validators';

['1', '2', '3', '4', 'a'] |> turnItemsIntoNumbers; // [1, 2, 3, 4, 'a']
```

## Examples Without Pipeline Operator

```javascript
import { turnItemsIntoNumbers } from '@ducto/validators';

turnItemsIntoNumbers(['1', '2', '3', '4', 'a']); // [1, 2, 3, 4, 'a']
```
