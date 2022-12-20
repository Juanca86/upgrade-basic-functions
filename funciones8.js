const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
    ];
    function repeatCounter(array) {
        const contador = []
        for (const palabras of array) {
            if( contador[palabras] ){
                contador[palabras]++
            } else {
                contador[palabras] = 1
            }
        }
        return contador
    }
    console.log(repeatCounter(counterWords));





    //     let element = []
    //     let veces = []
    //     let contador = 1
    //     for (let i = 0; i < array.length; i++) {
    //         if(array[i+1] === array[i]){
    //         // console.log('se repite la palabra ' + array[i]);
    //         contador++
    //     }
    //     else { element.push(array[i])
    //         veces.push(contador)
    //         contador = 1
            
    //     }
        
    //     }
    // for (let i = 0; i < element.length; i++) {
    //     console.log('la parabra ' +element + ' se repite ' +veces);   
        
        
    // }
    
    