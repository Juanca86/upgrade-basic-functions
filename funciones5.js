const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i]
        }
        else {
            //typeof array[i] === 'string'
            sum += array[i].length
        }
        // console.log(sum);
    }
    
    return sum
}
console.log(averageWord(mixedElements));