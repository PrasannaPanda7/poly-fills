const pr1 = new Promise((res, rej) => setTimeout(res, 500, "data1"));
const pr2 = new Promise((res, rej) => setTimeout(rej, 1000, "data2"));
const pr3 = new Promise((res, rej) => setTimeout(rej, 1000, "data3"));

const promiseAllSettled = (promises) => {
  let response = Array.from(promises.length).fill({});
  let settled = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          response[i] = {
            status: "fulfilled",
            value: res,
          };
          settled++;
          if (promises.length === settled) {
            resolve(response);
          }
        })
        .catch((err) => {
          response[i] = {
            status: "rejected",
            reason: err,
          };
          settled++;
          if (promises.length === settled) {
            resolve(response);
          }
        });
    }
  });
};

Promise.allSettled([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

promiseAllSettled([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
