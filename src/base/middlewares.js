export const defaultMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  return result;
};
