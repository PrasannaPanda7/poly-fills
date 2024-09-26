let arr = [1, 2, 3, 4, 5];

Array.prototype.ForEach = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);
  if (!this) {
    throw new TypeError("this is null or not defined");
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      callbackFn.call(thisArg, this[i], i, this);
    }
  }
};

arr.ForEach((item, index) => console.log("item", item, index));
