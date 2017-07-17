
module.exports = {
    squared(array) {
        let newArray = [];
        array.forEach(function(element) {
            var result = element * element;
            if (result > 20) newArray.push(result);
        }, this);
        return newArray;
    }
};