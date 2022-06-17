#### Example Using Pipeline Operator

```javascript
import { omitProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(movie => (
  movie
    |> omitProperties('year')(#)
));
```

#### Example Without Pipeline Operator

```javascript
import { omitProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(
  omitProperties(
    'year',
  ),
);
```

