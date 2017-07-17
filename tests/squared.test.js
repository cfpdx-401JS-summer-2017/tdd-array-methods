const assert = require('assert');
const squared = require('../src/squared');

describe('array methods', () => {
    it('squared numbers array', () => {
        const array = [1, 5, 8];

        const squaredArray = squared(array);
        assert.deepEqual(squaredArray, [25, 64]);
    });
});