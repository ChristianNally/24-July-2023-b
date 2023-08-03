const generators = require('./generators');

const returnPromise = generators.returnPromise;

const myPromise = returnPromise('promise one');

console.log(myPromise);

// setTimeout(() => {
//   console.log(myPromise);
// }, 2000);

// myPromise.then((data) => {
//   console.log('data is', data);
// });

return myPromise // 1000ms to resolve
  .then((data) => {
    console.log('data is', data);
    // return { username: 'alice' };

    // const promiseTwo = returnPromise('promise two');
    // return promiseTwo;

    return returnPromise('promise two');
  })
  .then((data) => {
    console.log('number two', data);
  })
  .then((data) => {
    console.log('number three');
  })
  .then((data) => {
    console.log('number four');
  })
  .then((data) => {
    console.log('number five');
  });
