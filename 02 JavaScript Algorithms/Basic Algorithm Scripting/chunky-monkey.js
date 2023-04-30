/* Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while (arr.length > 0) {
    let subArray = [];
    for (let i = 0; i < size && arr.length > 0; i++) {
      subArray.push(arr.shift());
    }
    newArray.push(subArray);
  } 
  return newArray;
}