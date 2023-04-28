/* Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */


const findElement = (arr, func) => {
  for (const item of arr) {
    if (func(item)) {
      return item
    };
  }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));