const generators = require('./generators');

const returnRejectedPromise = generators.returnRejectedPromise;
const returnPromise = generators.returnPromise;

// const promise = returnRejectedPromise('promise one');
const promiseTwo = returnPromise('promise two');

// console.log(promise);

promiseTwo
  .catch((err) => {
    console.log('an error occurred', err);
  })
  .then((data) => {
    console.log(data);

    return returnRejectedPromise('promise three');
  })
  .then((data) => {
    console.log('in between', data);
  })
  .then((data) => {
    console.log('in between', data);
  })
  .then((data) => {
    console.log('in between', data);
  })
  .then((data) => {
    console.log('in between', data);
  })
  .catch((err) => {
    console.log('an error occurred', err);
  });
