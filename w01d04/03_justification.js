// single responsiblity principle => a piece of code should be responsible for only one thing

// higher order function => forEach
const genericFunc = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) { // 1. looping through the array
    const element = arr[i];
    callback(element) // doOnEachLoop(element)
  }
};

const doOnEachLoop = function(element) {
  console.log(`You are logged in as ${element}`);
};

const names = ['alice', 'bob', 'carol'];

// names.forEach(doOnEachLoop);

genericFunc(names, doOnEachLoop);

const nums = [1,2,3,4];

const anotherCallback = function(num) {
  console.log(num * 3);
};

genericFunc(nums, anotherCallback);
