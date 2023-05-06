/*Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


const fearNotLetter = str => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(0) !== i) {
      return String.fromCharCode(str.charCodeAt(i) - 1)
    }
  }
}

console.log(fearNotLetter("cdegh"));


// First Try:

// function fearNotLetter(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const indexArray = str.split('').map(item => alphabet.search(item));
//   let missingLetter = '';
//   let i = indexArray[0];
//   let j = 0;
//   while (alphabet[i] === str[j]) {
//     if (alphabet[alphabet[i]] !== str[j]) {
//       missingLetter = alphabet[i + 1];
//     }
//     i++;
//     j++;
//   }
//   return missingLetter;
// }