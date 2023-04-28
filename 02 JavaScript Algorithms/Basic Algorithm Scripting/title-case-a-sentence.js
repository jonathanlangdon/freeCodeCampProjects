/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */

/* The long way - first time I did it

const titleCase = str => {
  let strArray = str.split(' ');
  for (let [index, word] of strArray.entries()) {
    let letterArray = word.split('')
    letterArray[0] = letterArray[0].toUpperCase();
    for (let i = 1; i < letterArray.length; i++) {
      letterArray[i] = letterArray[i].toLowerCase();
    } 
    strArray[index] = letterArray.join('');
  }
  return strArray.join(' ');
}
*/

const titleCase = str => {
  return str.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase());
}

console.log(titleCase("i'M a littlE tea pot"));