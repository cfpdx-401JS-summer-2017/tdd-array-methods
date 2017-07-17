const source = require('../src/source');
var assert = require('assert');

describe('map', () => {
    it('Creates a new array witholing elements that did not pass the test', ()=> {
        var array = [1, 4, 5, 7]
        const maped = source.map(array, function(array, i){
           newItem = array[i] * array[i] 
           if (newItem > 20) return newItem

        });
           assert.equal(maped, [25, 49]);
    })
})