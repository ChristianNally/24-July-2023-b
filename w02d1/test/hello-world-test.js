const assert = require('assert'); // This line includes new definitions
const objectOfFunctions = require('../hello-world');

describe('things to say at the beginning or end of a conversation', () => {
    it('says Hello properly', () => {
        // test code
        const whatWasSaid = objectOfFunctions.sayHello('Monkey Fuzz');
        assert.equal(whatWasSaid, 'Hello, Monkey Fuzz!');
    });
    
    it('says Goodbye properly', () => {
        // test code
        const whatWasSaid = objectOfFunctions.sayGoodbye('Monkey Fuzz');
        assert.equal(whatWasSaid, 'Goodbye, Monkey Fuzz!');
    });    
});
