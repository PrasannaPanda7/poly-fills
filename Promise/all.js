const pr1 = new Promise((res, rej) => setTimeout(res, 500, "data1"));
const pr2 = new Promise((res, rej) => setTimeout(res, 1000, "data2"));
const pr3 = new Promise((res, rej) => setTimeout(res, 1000, "data3"));

const promiseAll = (promises) => {
  const response = [];
  let resolved = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          response[i] = data;
          resolved++;
          if (resolved === promises.length) {
            resolve(response);
          }
        })
        .catch((rej) => reject(rej));
    }
  });
};

promiseAll([pr1, pr2, pr3])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err));
