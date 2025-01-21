const customSetInterval = (callbackFn, interval) => {
  let cancel = false;
  const newCallBack = () => {
    if (!cancel) {
      callbackFn();
      setTimeout(newCallBack, interval);
    }
  };
  setTimeout(newCallBack, interval);
  return {
    clear: () => {
      cancel = true;
    },
  };
};

const interval = customSetInterval(() => console.log("hello"), 500);

setTimeout(() => {
  interval.clear();
}, 3000);
