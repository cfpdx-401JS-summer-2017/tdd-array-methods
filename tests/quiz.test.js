const assert = require('assert');
const quiz = require('../lib/quiz.js');

describe('quiz method', () => {
    it('returns squares over 20', () => {
        const testNumbers = [1,4,5,7];
        const testResults = quiz.squareRoot(testNumbers, (item,index) => {
            
        });
        assert.deepEqual(testResults, [25,49]);
    });
});