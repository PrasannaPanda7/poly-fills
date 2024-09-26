const tempobj1 = {
  name: "gangadhar",
};

const tempobj2 = {
  name: "bidyadhar",
};

const greet = function (greetMsg) {
  return `${greetMsg}, ${this.name}`;
};

console.log(greet.apply(tempobj1, ["hello"]));

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  if (Array.isArray(args) === false) {
    throw new Error(`${args} is not an array`);
  }
  context = context || window;
  const tempFn = Symbol();
  context[tempFn] = this;
  const result = context[tempFn](args);
  delete context[tempFn];
  return result;
};

console.log(greet.myApply(tempobj2, ["hello"]));
