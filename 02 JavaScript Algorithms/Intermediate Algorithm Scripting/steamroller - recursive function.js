//use Array.isArray()

const steamrollArray = (arr) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrNew.push(...steamrollArray(arr[i]));
    } else {
      arrNew.push(arr[i]);
    }
  }
  return arrNew
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Passed: Global variables should not be used.
*/