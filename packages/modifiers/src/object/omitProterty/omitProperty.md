#### Example Using Pipeline Operator

```javascript
import { omitProperty } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(movie => (
  movie
    |> omitProperty('title')(#)
));
```

#### Example Without Pipeline Operator

```javascript
import { omitProperty } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(
  omitProperty(
    'title',
  ),
);
```

