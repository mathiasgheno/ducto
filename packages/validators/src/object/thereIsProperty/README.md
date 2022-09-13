# thereIsProperty

- 📣 Throw error if not satisfied
- 🦺 Pure Function


Verifies that the object has the property. If the property is undefined, it throws an error.

### With pipeline Operator

```javascript
import { thereIsProperty } from '@ducto/validators';

const object = {
  name: 'John',
  age: 30,
};

object |> thereIsProperty('name'); // not throw
```

### Without pipeline Operator

```javascript
import { thereIsProperty } from '@ducto/validators';

const object = {
  name: 'John',
  age: 30,
};

thereIsProperty('name')(object); // not throw
```
