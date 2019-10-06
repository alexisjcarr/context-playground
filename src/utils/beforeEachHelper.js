let originalWarning, originalError;

export const beforeEachHelper = () => {
  originalWarning = console.warn;
  originalError = console.error;
  console.error = jest.fn();
  console.warn = jest.fn();
};
