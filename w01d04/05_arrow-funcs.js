// arrow functions were added in ES6 (2015)
// ECMAScript European Computer Manufacturer's Association
// advantages of arrow functions
// 1. no function keyword yay!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow functions do not create `this`

const user = {
  firstName: 'alice',
  lastName: 'wonderland',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const myFunc1 = function() {};
const myFunc2 = () => {};

// const sayHello = function(name) {
//   return `hello there ${name}`;
// };

// implicit => we don't ask for it to happen 
// explicit => we specify exactly what will happen

const sayHello = name => {
  2 + 2
  return `hello there ${name}`;
}

// function(x) { return x + 2 }
// x => x + 2

const returnVal = sayHello('elise');

console.log('returnVal', returnVal);
