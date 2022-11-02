# contains

Validate if a string contains another string.

### Example with Pipeline Operator

```javascript
import { contains } from '@ducto/validators';

'foo bar'
  |> contains('foo') // not throw
```


### Example without Pipeline Operator

```javascript
import { contains } from '@ducto/validators';

contains('foo')('foo bar'); // not throw
```
