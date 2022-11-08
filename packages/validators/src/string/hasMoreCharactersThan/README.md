# hasMoreCharactersThan

This function checks if the string has more characters than the given number.

### With Pipeline Operator

```javascript
import { hasMoreCharactersThan } from '@ducto/validators';

'hello'
  |> hasMoreCharactersThan(4)(#) // not throw
```

### Without Pipeline Operator

```javascript
import { hasMoreCharactersThan } from '@ducto/validators';

hasMoreCharactersThan(4)('hello') // not throw
```
