import { omitProterty } from './omitProterty.js';

test('should retorn movies with no title', () => {
  const movies = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
  ];
  const newMovies = movies.map(omitProterty('title'));
  expect(newMovies).toEqual([{year: 1994}, {year: 1972}]);
})
