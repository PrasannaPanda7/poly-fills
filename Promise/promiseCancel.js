const pr = new Promise((res, rej) => setTimeout(res, 500, "data"));

const promiseWithCancel = (promise) => {
  let isCancelled = false;
  const tempPr = new Promise((res, rej) => {
    promise
      .then((data) => {
        if (!isCancelled) {
          res(data);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          rej(err);
        }
      });
  });

  tempPr.cancel = () => {
    isCancelled = true;
  };
  return tempPr;
};

const newPr = promiseWithCancel(pr);
newPr.cancel();
newPr.then((res) => console.log(res)).catch((err) => console.log(err));
