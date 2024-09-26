const once = (func, context) => {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return func.apply(context || this, args);
    }
  };
};

const sum = (a, b) => a + b;

const sumOnce = once(sum);

console.log(sumOnce(1, 2));

console.log(sumOnce(1, 2));

console.log(sumOnce(1, 5));
