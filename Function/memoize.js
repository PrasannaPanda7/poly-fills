function useMemoCustom(callback, capacity = 10) {
  const map = new Map();
  function memoizedCallBack(...args) {
    const index = JSON.stringify(args);
    let res = null;
    if (map.has(index)) {
      res = map.get(index);
      map.delete(index);
    } else {
      res = callback(...args);
    }

    if (map.size === capacity) {
      map.delete(map.keys().next().value);
    }

    map.set(index, res);
    return res;
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
