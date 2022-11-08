# hasLessCharactersThan

### Using with Pipeline Operator

```javascript
import { hasLessCharactersThan } from '@ducto/validators';

'hello'
  |> hasLessCharactersThan(10)(#) //not throw
```

### Using without Pipeline Operator

```javascript
import { hasLessCharactersThan } from '@ducto/validators';

hasLessCharactersThan(10)('hello') //not throw
```
