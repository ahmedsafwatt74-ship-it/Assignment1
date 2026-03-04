var createCounter = function (init) {
  let currentCount = init;

  return {
    increment: () => {
      return ++currentCount;
    },
    decrement: () => {
      return --currentCount;
    },
    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };
};
