function squared(array) {
    const squared = [];
    for (let i = 0; i < array.length; i++) {
        const squaredVal = array[i] * array[i];

        if (squaredVal > 20) {
            squared.push(squaredVal);
        }
    }
    return squared;
}

module.exports = squared;