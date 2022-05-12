import log from 'loglevel';

export const ducto = (...filters) => {
  return property => {
    log.debug(`Receiving from pipe: ${JSON.stringify(property)}`);
    const finalResult = filters.reduce(
      (acc, fn) => {
        return fn(acc);
      },
      property
    );
    log.debug(`Final result of pipe: ${JSON.stringify(finalResult)}`);
    return finalResult?.length > 0;
  }
}
