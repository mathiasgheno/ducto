#### Example Using Pipeline Operator

```javascript
import { removeUndefinedProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: undefined},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(movie => (
  movie
    |> removeUndefinedProperties(#)
))
```

#### Example Without Pipeline Operator

```javascript
import { removeUndefinedProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(
  removeUndefinedProperties,
);
```

