# turnItemsIntoStrings

Turns all items in an array into numbers. This functions is recursive, so it will also turn items in nested arrays into strings.


## Examples With Pipeline Operator

```javascript
import { turnItemsIntoNumbers } from '@ducto/validators';

[1, 2, 3, 'a'] |> turnItemsIntoNumbers; // ['1', '2', '3', 'a']
```

## Examples Without Pipeline Operator

```javascript
import { turnItemsIntoNumbers } from '@ducto/validators';

turnItemsIntoNumbers([1, 2, 3, 'a']); // ['1', '2', '3', 'a']
```
