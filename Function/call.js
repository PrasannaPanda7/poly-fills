const myObject = {
  name: "John",
  greet: function (message) {
    return `${message}, my name is ${this.name}`;
  },
};

const newObj = {
  name: "Jane",
};

const sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

console.log(sayHello.call(newObj));

Function.prototype.Call = function (context, ...args) {
  if (typeof this !== "function") throw new Error(`${this}, not a function`);

  context = context || window;
  const tempFn = Symbol();
  context[tempFn] = this;
  const result = context[tempFn](...args);
  delete context[tempFn];
  return result;
};

console.log(sayHello.Call(newObj));

console.log(myObject.greet.Call(newObj, "Wakata"));
