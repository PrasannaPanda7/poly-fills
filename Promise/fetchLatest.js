const getRandomDelay = () => Math.floor(Math.random() * 1000);

const getRandomData = (data) => {
  return new Promise((res) => setTimeout(res, getRandomDelay(), data));
};

const latestDataFetcher = (func) => {
  let latestData;
  return function (data) {
    latestData = data;
    return new Promise((res) => {
      func(data).then((resp) => data === latestData && res(resp));
    });
  };
};

const dataFetcher = latestDataFetcher(getRandomData);

dataFetcher("a").then(console.log);
dataFetcher("b").then(console.log);
dataFetcher("c").then(console.log);
