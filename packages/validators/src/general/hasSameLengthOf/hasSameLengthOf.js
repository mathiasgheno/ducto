/**
 * @nosideeffects
 * @type {import('./hasSameLengthOf').HasSameLengthOf}
 */
export const hasSameLengthOf = (B) => (A) => {

  const getErrorMessage = () => {
    return `The length of the values are not the same`;
  }

  if(typeof A === 'string' || Array.isArray(A)) {
    if(A.length !== B?.length) {
      throw new Error(getErrorMessage());
    }
  }

  if (A instanceof Map) {
    if(A.size !== B?.size) {
      throw new Error(getErrorMessage());
    }
  }

  if (A instanceof Set) {
    if(A.size !== B?.size) {
      throw new Error(getErrorMessage());
    }
  }

  return A;
}
