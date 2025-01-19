function useMemoCustom(callback) {
  const map = new Map();
  function memoizedCallBack(...args) {
    const index = JSON.stringify(args);
    if (map.has(index)) {
      return map.get(index);
    } else {
      const res = callback(...args);
      map.set(index, res);
      return res;
    }
  }
  return memoizedCallBack;
}

const sum = (...args) => {
  console.log("called for arg: ", args);
  return args.reduce((curr, sum) => curr + sum);
};
const memoizeSum = useMemoCustom(sum);

console.log(memoizeSum(1, 2, 3));
console.log(memoizeSum(1, 2, 5));
console.log(memoizeSum(1, 2, 3));
console.log(memoizeSum(1, 2, 4));
console.log(memoizeSum(1, 2, 3));
