const Throttle = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    const context = this;
    timer = setTimeout(() => {
      const res = callback.apply(context, args);
      if (typeof args[args.length - 1] === "function") {
        // check the last args and if it is a function then execute it
        args[args.length - 1](res);
      }
      timer = null;
    }, delay);
  };
};

const greet = (msg) => `${msg}`;

const throttledGreet = Throttle(greet, 1000);

throttledGreet("hello", (res) => console.log(res));
throttledGreet("hello2", (res) => console.log(res));

setTimeout(() => {
  throttledGreet("hello3", (res) => console.log(res));
}, 2000);
