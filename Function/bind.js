const tempobj1 = {
  name: "gangadhar",
};

const tempobj2 = {
  name: "bidyadhar",
};

const greet = function (greetMsg, from) {
  return `${greetMsg}, from ${from} ${this.name}`;
};

const greetObj2 = greet.bind(tempobj2, "hello", "ayush");
console.log(greetObj2());

Function.prototype.myBind = function (context, ...bindArgs) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  const bindFn = this;

  return function (...fnArgs) {
    context = context || window;
    const tempFn = Symbol();
    context[tempFn] = bindFn;
    const result = context[tempFn](...[...bindArgs, ...fnArgs]);
    delete context[tempFn];
    return result;
  };
};

const greetObj1 = greet.myBind(tempobj1, "hello", "ayush");
console.log(greetObj1());
