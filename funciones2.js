const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
  let contador = avengers[0]
  for(let character of avengers){
      
    if(character.length > contador.length){
      contador = character
    }
  }
  return contador
}
console.log(findLongestWord(avengers))