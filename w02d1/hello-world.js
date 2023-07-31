// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (nameString) => {
    const returnValue = `Hello, ${nameString}!`;
    return returnValue;
};

const sayGoodbye = (nameString) => {
    const returnValue = `Goodbye, ${nameString}!`;
    return returnValue;
};

// make the functions exportable
module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye
};
