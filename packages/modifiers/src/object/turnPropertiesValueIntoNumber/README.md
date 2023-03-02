# turnPropertiesValueIntoNumber

This function is going to check if the value of the property is a number (like `'1'`) and and turn it into a number.

### Using with Pipeline Operator

```javascript
import { turnPropertiesValueIntoNumber } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: '1994'},
  {title: 'The Godfather', year: '1972'},
];

const newMovies = movies.map(movie => (
  movie
    |> turnPropertiesValueIntoNumber(#)
));
```

### Using without Pipeline Operator

```javascript
import { turnPropertiesValueIntoNumber } from '@ducto/modifiers';

const movies = [
  {title: 'The Shawshank Redemption', year: '1994'},
  {title: 'The Godfather', year: '1972'},
];

const newMovies = movies.map(m => turnPropertiesValueIntoNumber(m));
```
