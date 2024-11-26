const pr1 = new Promise((res, rej) => setTimeout(rej, 500, "data1"));
const pr2 = new Promise((res, rej) => setTimeout(rej, 1000, "data2"));
const pr3 = new Promise((res, rej) => setTimeout(rej, 1500, "data3"));

Promise.any([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const promiseAny = (promises) => {
  let settled = 0;
  const error = [];
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((resp) => res(resp))
        .catch((err) => {
          error[i] = err;
          if (++settled === promises.length) {
            rej(new AggregateError(error, "All promises were rejected"));
          }
        });
    }
  });
};

promiseAny([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
