const Throttle = (callback, delay) => {
  let currTime = 0;
  return function (...args) {
    let endTime = new Date().getTime();
    if (endTime - currTime >= delay || currTime === 0) {
      const context = this;
      const res = callback.apply(context, args);
      console.log(res);
      currTime = endTime;
    }
  };
};

const greet = (msg) => `${msg}`;

const throttledGreet = Throttle(greet, 1000);

throttledGreet("hello");
throttledGreet("hello2");

setTimeout(() => {
  throttledGreet("hello3");
}, 2000);
