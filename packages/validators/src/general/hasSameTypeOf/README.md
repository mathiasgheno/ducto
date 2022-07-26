# hasSameTypeOf

- 📣 Throw error if not satisfied
- 📦 Curried Function
- ♾️ Multiple Arguments


This validator checks if the value passed was argument will be the same as the argument of the first function. 

#### Example Using Pipeline Operator

```javascript
import { hasSameTypeOf } from '@ducto/validators';

const movie1 = 'The Movie';
const movie2 = 'The Years';

[movie1, movie2]
  |> hasSameLengthOf('number')(...#) // error

```

#### Example Without Pipeline Operator

```javascript
import { hasSameLengthOf } from '@ducto/validators';

const movie1 = 'The Movie';
const movie2 = 'The Years';

const movies = [movie1, movie2]

hasSameLengthOf('string')(movies);
```
