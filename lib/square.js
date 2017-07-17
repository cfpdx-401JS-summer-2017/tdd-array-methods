function square(array) {
    array.map(function(x) {
        console.log('sq = ' + x*x);
        return x * x;
    });
}

module.exports = square;