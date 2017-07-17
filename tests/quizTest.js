const square = require('../lib/quiz.js');
const assert = require('assert');

describe('quiz library', () => {
    it('squares a value and returns values greater than 20', () => {
        const squareNumbers = square([1, 4, 5, 7]);
        assert.equal(squareNumbers, [25, 49]);

    });
});