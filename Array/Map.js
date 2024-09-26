let arr = [1, , 3, , 5];

Array.prototype.Map = function (callbackFn, thisArg) {
  // map method accepts optional thisArg argument to pass down the this reference form parent to the callback function
  // thisArg has the reference of parent data object while this here points to the initiator array i.e.numbers
  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);
  if (!this) throw new TypeError("this is null or undefined");
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) newArr.push(callbackFn.call(thisArg, this[i], i, this));
  }

  return newArr;
};

let result = arr.Map((num) => num * 2);
// console.log("result: ", result);

const data = {
  multiplier: 2,
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: function (num) {
    return num * this.multiplier;
  },
  multiply: function () {
    // this points to the data object
    return this.numbers.Map(function (num) {
      return num * this.multiplier;
    }, this);
  },
};

res = data.multiply();

console.log("res: ", res);
