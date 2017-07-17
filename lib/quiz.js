function squareRoot(unSquared, callback) {
    let squared = [];

    for (let i = 0; i < unSquared.length; i++) {
        let result = i*i;
        if (result > 20) {
            squared.push(result);
        }
    }
    callback(squared);
}

module.exports = {squareRoot};