# isString

Test if a value is a string primitive.

## With Pipeline Operator

```javascript
import { isString } from '@ducto/validators';

'hello world'
  |> isString(#) // not throw
```

## Without Pipeline Operator

```javascript
import { isString } from '@ducto/validators';

isString('hello world') // not throw
```
