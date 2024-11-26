const pr1 = new Promise((res, rej) => setTimeout(rej, 500, "data1"));
const pr2 = new Promise((res, rej) => setTimeout(res, 1000, "data2"));

// Promise.race([pr1, pr2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((res) => resolve(res)).catch((err) => reject(err));
    }
  });
};

promiseRace([pr1, pr2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
