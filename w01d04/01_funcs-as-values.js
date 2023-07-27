// function declaration
// function sayHello(name) {
//   console.log(`hello there ${name}`);
// }

// function expression
// first-class
const sayHello = function(name) {
  console.log(`hello there ${name}`);
  return 42;
};

const funcs = [];
// funcs.push(sayHello());
funcs.push(sayHello);

console.log(funcs);

const storedFunc = funcs[0];
storedFunc('elise'); // sayHello('elise');

// console.log('above', sayHello);

// sayHello['mySecretKey'] = 'something';
// sayHello.myOtherSecretKey = 'something else';

// console.log('below', sayHello);

// sayHello()
// sayHello.myOtherSecretKey

// const returnVal = sayHello('bob');
// console.log('returnVal', returnVal);

// const obj1 = {};
// const obj2 = obj1;

// // const copy = sayHello();
// const copy = sayHello;

// copy('dean'); // sayHello('dean')

// const arr = []
// const obj = {}
// const num = 42

// sayHello('alice');
