#### Example Using Pipeline Operator

```javascript
import { onlyProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(movie => (
  movie
    |> onlyProperties('title', 'year')(#)
));
```

#### Example Without Pipeline Operator

```javascript
import { onlyProperties } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

const newMovies = movies.map(
  onlyProperties(
    'title',
    'year',
  ),
);
```

