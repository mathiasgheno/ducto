/**
 * @type {import('./contains.types').Contains}
 */
export const contains = (match) => subject => {
  if(!subject.match(match)) {
    throw new Error(`"${subject}" does not have value ${match}`);
  }
  return subject;
}
