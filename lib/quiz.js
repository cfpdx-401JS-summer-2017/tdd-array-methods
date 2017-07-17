
function square(array) {
    for(let i = 0; i < array.length; i++ ){
        const squared = array[i]*array[i];
        if(squared > 20){
            return squared;
        }
        
    }
}

module.exports = square;