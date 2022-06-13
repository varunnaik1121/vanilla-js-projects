const promisesAll = (promises) => {
  const output = [];
  let settledPromise = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          output[i] = data;
          settledPromise++;
          if (settledPromise === promises.length) {
            resolve(output);
          }
        })
        .catch(reject);
    });
  });
};

let delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("timeout ");
  }, 2000);
});

let promises = [Promise.resolve(2), Promise.resolve(3), delayPromise];
promisesAll(promises).then((data) => {
  console.log(data);
});
