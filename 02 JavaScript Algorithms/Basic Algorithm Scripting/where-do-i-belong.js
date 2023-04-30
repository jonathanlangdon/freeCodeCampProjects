/*
Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length === 0 || num > arr[arr.length - 1]) {
    return arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
}

console.log(getIndexToIns([3, 4, 1, 9, 5], 7.5));