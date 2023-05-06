// Using .findIndex();

const dropElements = (arr, func) => {
  const index = arr.findIndex(func);
  return index >= 0 ? arr.slice(index) : [];
}



// First Try:

// const dropElements = (arr, func) => {
//   const arrNew = [...arr];
//   let i = 0;
//   while (!func(arr[i])) {
//     arrNew.shift();
//     i++;
//   }
//   return arrNew;
// }

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));

/*
Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/