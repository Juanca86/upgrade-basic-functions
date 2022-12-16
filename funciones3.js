const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let sum1 = 0
    for (let i =0 ;  i < array.length; i++){
        sum1 += array[i]
        
    }
    return sum1
    
}
console.log(sumAll(numbers))


