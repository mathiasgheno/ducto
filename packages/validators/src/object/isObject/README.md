# isObject

This function checks if the value is an object.

## Example Using Pipeline Operator

```javascript
import { isObject } from '@ducto/validators';

const movie = {
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
};

movie
  |> isObject(#); // ok
```

## Example Without Pipeline Operator

```javascript
import { isObject } from '@ducto/validators';

const movie = {
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
};

isObject(movie); // ok
```
