const myObject = {
  name: "John",
};

const newObj = {
  name: "Jane",
};

const sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

console.log(sayHello.call(newObj));

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new Error(`${this}, not a function`);

  context = context || window;
  const tempFn = Symbol();
  context[tempFn] = this;
  const result = context[tempFn](...args);
  delete context[tempFn];
  return result;
};

console.log(sayHello.myCall(newObj));
