Array.prototype.Reduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);
  let accumulator = initialValue;
  let i = 0;
  if (accumulator === undefined) {
    while (i < this.length && !(i in this)) {
      i++; // skip over undefined
    }
    accumulator = this[i++];
  }
  for (i; i < this.length; i++) {
    if (i in this) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

let arr = [, 2, 3, 4, , 5];
let res = arr.Reduce((acc, curr) => {
  return acc + curr;
});

console.log("res", res);
