# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises

### What is a promise?
* promises are objects
* promise of things to come

move is sat at noon
fri night

* pending state
* fulfilled/resolved
* failed/rejected

* .then() => happy path
* .catch() => unhappy path

promiseOne => 1000ms
promiseTwo => 2000ms
promiseThree => 3000ms

6000ms

3000ms

Promise.all([promiseOne, promiseTwo])
  .then((results) => {
    results[0] => promiseOne
    results[1] => promiseTwo
  })
  .catch(() => {})











