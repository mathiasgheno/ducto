export const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);
