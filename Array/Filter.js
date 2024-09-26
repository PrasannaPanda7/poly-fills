Array.prototype.Filter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);
  if (this === undefined) throw new TypeError("this is undefined");
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      let temp = callbackFn.call(thisArg, this[i], i, this);
      if (temp) {
        newArr.push(this[i]);
      }
    }
  }
  return newArr;
};

// console.log([1, 2, 3, 4, 5].Filter((item) => item > 2));

const data = {
  keyVal: 1,
  numbers: [1, 2, 3, 4, 5],
  filterNum: function () {
    return this.numbers.Filter((item) => item > this.keyVal);
  },
};

console.log(data.filterNum());
