/* Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
*/

function mutation(arr) {
  const stringArray1 = arr[0].toLowerCase().split('');
  const stringArray2 = arr[1].toLowerCase().split('');
  for (let i = 0; i < stringArray2.length; i++) {
    if (stringArray1.includes(stringArray2[i])) {
      continue;
    } else return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));