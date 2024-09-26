const Debounce = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      const res = callback.apply(context, args);
      if (typeof args[args.length - 1] === "function") {
        // check the last args and if it is a function then execute it
        args[args.length - 1](res);
      }
    }, delay);
  };
};

const greet = (msg) => `${msg}`;

const debouncedGreet = Debounce(greet, 1000);

console.log(debouncedGreet("hello")); // logs undefined
// as setTimeout is an async function and we are immediately logging the result it will be undefined
// to get the result we have to pass a callback in the debounce method and execute it
debouncedGreet("hello", (result) => console.log(result));
debouncedGreet("hello", (result) => console.log(result));
debouncedGreet("hello", (result) => console.log(result));
debouncedGreet("hello", (result) => console.log(result));
// console.log(debouncedGreet("hello"));
// console.log(debouncedGreet("hello"));
