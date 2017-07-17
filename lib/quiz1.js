const quiz1 = {};

quiz1.squared = function(arr) {
    let newArr = arr.map(item => item = item * item);
    let result = newArr.filter(item => item > 20);
    return result;
};

module.exports = quiz1;