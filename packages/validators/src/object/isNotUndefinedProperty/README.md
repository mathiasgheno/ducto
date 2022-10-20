# isNotUndefinedProperty

Test if a property of an object is not `undefined`.

### With Pipeable Operators

```js
import { isNotNullProperty } from '@ducto/validators';

const object = { name: 'John' };

object |> isNotNullProperty('name');

```


### Without Pipeable Operators

```js
import { isNotNullProperty } from '@ducto/validators';

const object = { name: 'John' };

isNotNullProperty('name')(object);

```
