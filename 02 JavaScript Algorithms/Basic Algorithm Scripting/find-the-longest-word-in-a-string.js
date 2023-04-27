/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


const findLongestWordLength = str => {
  let longestWord = '';
  const stringArray = str.split(' ');
  for (const word of stringArray) {
    if (word.length > longestWord.length) {
      longestWord = word; 
    }
  }
  return longestWord.length;
}