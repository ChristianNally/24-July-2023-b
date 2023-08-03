const generators = require('./generators');

const returnPromise = generators.returnPromise;
const returnRejectedPromise = generators.returnRejectedPromise;

const promiseOne = returnPromise('promise one');
const promiseTwo = returnPromise('promise two');
const promiseThree = returnRejectedPromise('promise three');
const promiseFour = returnPromise('promise four');

const promises = [promiseOne, promiseTwo, promiseThree, promiseFour];

Promise.all(promises)
  .then((results) => {
    // console.log(results);
    const resultOfPromiseOne = results[0];
    const resultOfPromiseTwo = results[1];
  })
  .catch((err) => {
    console.log(err);
  });
