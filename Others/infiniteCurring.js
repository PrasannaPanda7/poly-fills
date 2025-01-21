// write a function to calculate sum where no of arguments are not defined
// sum(1)(2)() => 3
// sum(1)(2)(3)() => 6

const curriedSum = (arg1) => {
  return function (arg2) {
    if (arg2) return curriedSum(arg1 + arg2);
    return arg1;
  };
};

console.log(curriedSum(1)(2)());
console.log(curriedSum(1)(2)(3)());
console.log(curriedSum(1)(2)(4)());

// if you are not allowed to use empty () to find function call ending function coercion can be used

const curriedSum2 = (arg1) => {
  let sum = arg1;
  function curring(arg2) {
    sum += arg2;
    return curring;
  }
  curring.toString = () => sum;
  return curring;
};
console.log(+curriedSum2(1)(2)(3)(4));
