const assert = require('assert');
const methods = require('../lib/array-methods');


describe('array methods', () => {
    it('returns array of squared numbers greater than 20', () => {
        const array = [1, 4, 5, 7];
        const squared = methods.squared(array);
        assert.deepEqual(squared, [25, 49]);
    });
});
