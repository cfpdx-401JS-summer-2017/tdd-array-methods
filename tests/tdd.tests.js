
const assert = require('assert');


describe('returns array of squared numbers', () => {

    const origArray = [1, 4, 5, 7];
    let squaredArray = square(origArray);

    it('squares original array', done => {

        let squaredArray = square(origArray, (err, squaredOrig) => {

            if (err) return done(err);
            assert.equal(squaredOrig, [1, 16, 25, 49]);
            done();

        });
    });
});