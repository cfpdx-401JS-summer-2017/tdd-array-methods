const assert = require('assert');
const lib = require('../lib/array-method');

describe('acts as a library', () => {
  it('takes an array of numbers and returns an array of those numbers squared where the values are no less than 20', () => {
    const testArray1 = [ 2, 4, 7, 9, 10 ];
    const testArray2 = [ 1, 4, 5, 7 ];
    const testArray3 = [ 1, 4 ];

    const squaredArray1 = lib.squareUp(testArray1);
    const squaredArray2 = lib.squareUp(testArray2);
    const squaredArray3 = lib.squareUp(testArray3);

    assert.deepEqual(squaredArray1, [49, 81, 100]);
    assert.deepEqual(squaredArray2, [25, 49]);
    assert.deepEqual(squaredArray3, []);
  });
});