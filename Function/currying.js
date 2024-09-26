const currying = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) return func(...args);
    return (...args2) => curried(...args, ...args2);
  };
};

//infinite currying
const curryingSum = (arg1) => {
  return (arg2) => {
    if (arg2) return curryingSum(arg1 + arg2);
    return arg1;
  };
};
