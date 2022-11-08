# isLowerCase

Checks if the string is lowercase.

## With Pipeline Operator

```javascript
import { isLowerCase } from '@ducto/validators';

'hello world'
  |> isLowerCase(#) // not throw
```

## Without Pipeline Operator

```javascript
import { isLowerCase } from '@ducto/validators';

isLowerCase('hello world') // not throw
```
