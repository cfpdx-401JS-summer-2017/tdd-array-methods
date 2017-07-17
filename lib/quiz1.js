const quiz1 = {};

quiz1.squared = function(arr) {
    let newArr = arr.map(arr, item => item = item^2);
    let result = newArr.filter(newArr, item => item > 20);
    return result;
};

module.exports = quiz1;