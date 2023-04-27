/*
Reverse a String

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

*/


// Method 1 (my favorite)

const reverseString = str => str.split('').reverse().join('');

// Method 2 - using .map()

// const reverseString = str => str.split('').map((char, index, arr) => arr[arr.length - index - 1]).join('');


// Method 3 - using .forEach() and .unshift()

/*
function reverseString(str) {
  const newString = [];
  str.split('').forEach(each => newString.unshift(each))
  return newString.join('');
}
*/

reverseString("hello");