# startWith

- 📣 Throw error if not satisfied
- 🦺 Pure Function

Check if a string starts with a given substring.

### Example Using Pipeline Operator

```js
import { startWith } from '@ducto/validators';

const startWithHello = startWith('hello');

'hello world'
  |> startWithHello(#); // not throw error
```

### Example Without Pipeline Operator

```js
import { startWith } from '@ducto/validators';
const startWithHello = startWith('hello');
startWithHello('hello world'); // not throw error
```
