import log from 'loglevel';

/**
 * @type {import('./hasLessCharactersThan.types').HasLessCharactersThan}
 */
export const hasLessCharactersThan = (desired) => (subject) => {
  log.info('Executing hasLessCharactersThan');
  log.debug(subject);
  const size = subject.length;
  if(size > desired) {
    throw new Error(`Value is bigger than ${desired} characteres`);
  }
  return subject;
}
