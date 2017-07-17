const assert = require('assert');
const square = require('../lib/square');

describe('square function', () => {
    it('does square', () => {
        const array = [1,4,5,7];
        const squared = square(array);
        console.log(squared);
        assert.equal(squared, [1,16,25,49]);
    });
});