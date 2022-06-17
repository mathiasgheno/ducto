import { pickProperty } from './pickProperty.js';

test('should retorn movie with title', () => {
  const movie = {title: 'The Shawshank Redemption', year: 1994};
  const newMovie = pickProperty('title')(movie);
  expect(newMovie).toEqual({title: 'The Shawshank Redemption'});
});
