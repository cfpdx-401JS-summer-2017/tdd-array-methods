
const lib = {
  squareUp: function (arr) {
    return arr.map( item => item * item ).filter( item => item >= 20 );
  }
};

module.exports = lib;