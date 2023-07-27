// naming things is hard

// const myFaveNumber = 42;
// console.log(42);

// console.log('hello'); // anonymous

const runMyFunc = function(anotherFunc) {
  console.log(anotherFunc.toString());
  anotherFunc('alice'); // 42('alice')
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);
runMyFunc(function(name) {
  console.log(`hello there ${name}`);
})

