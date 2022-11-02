
export const contains = (value) => subject => {
  if(!subject.match(value)) {
    throw new Error(`"${subject}" does not have value ${value}`);
  }
  return subject;
}

contains('fsoo')('foo bar baz');
