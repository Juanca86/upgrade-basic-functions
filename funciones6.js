const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];
    function removeDuplicates(array) {
        let repetidos = []
        for (let i = 0; i < array.length; i++) {
            if(repetidos.includes(array[i])) {
            }
            else {
                repetidos.push(array[i])
            }
        }
        return repetidos
    }
    console.log(removeDuplicates(duplicates));

        // for (let i=param.length; i>=0; i--) {
        //     if(param.indexOf(param[i])!==i){
        //         param.splice(i, 1)
        //     }
        // }
        // return param;