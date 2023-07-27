// callback => a function that you pass to another function to be called/invoked by that function

const runMyFunc = function(anotherFunc) {
  console.log(anotherFunc.toString());
  const returnVal = anotherFunc('alice'); // 42('alice')
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
  return true;
};

runMyFunc(sayHello);
console.log();
runMyFunc(console.log);
