const assert = require('assert');
const lib = require('../lib/array-method');

describe('acts as a library', () => {
  it('takes an array of numbers and returns an array of those numbers squared where the values are no less than 20', () => {
    const testArray = [ 2, 4, 7, 9 ];

    const squaredArray = lib.squareUp(testArray);

    assert.deepEqual(squaredArray, testArray);
  });
});