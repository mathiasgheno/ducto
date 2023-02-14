# isUpperCase

Test if a value is a string is uppercase, allowing numbers and special characters.

## With Pipeline Operator

```javascript
import { isUpperCase } from '@ducto/validators';

'HELLO WORLD'
  |> isUpperCase(#) // not throw
```

## Without Pipeline Operator

```javascript
import { isString } from '@ducto/validators';

isString('HELLO WORLD') // not throw
```
