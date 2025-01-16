Array.prototype.Every = function (callback, context) {
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (!callback.call(context, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const arr = [];

console.log(arr.every((num) => num > 2));

Array.prototype.Some = function (callback, context) {
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (callback.call(context, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
