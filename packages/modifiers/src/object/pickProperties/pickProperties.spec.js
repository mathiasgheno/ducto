import { pickProperties } from './pickProperties.js';

const movies = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
];

test('should retorn movies with title', () => {
  const newMovies = movies.map(pickProperties('title'));
  expect(newMovies).toEqual([{title: 'The Shawshank Redemption'}, {title: 'The Godfather'}]);
});
