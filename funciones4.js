const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
let pro = 0
for ( i= 0; i < array.length; i++){
pro += array[i]
}
return pro/array.length
}console.log(average(numbers))
