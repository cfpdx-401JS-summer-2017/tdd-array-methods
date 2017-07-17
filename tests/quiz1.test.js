const assert = require('assert');
const quiz1 = require('../lib/quiz1.js');

describe('quiz1', () => {
    it('takes an array of numbers and returns another array of the square of those numbers, filtered to only contain those squares greater than 20', () => {
        const testArr = [1, 4, 5, 7];
        let result = quiz1.squared(testArr);
        assert.deepEqual(result, [25, 49]);

    });
});