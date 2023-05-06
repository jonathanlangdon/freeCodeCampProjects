function smallestCommons(arr) {
  let arrMin = Math.min(...arr);
  let arrMax = Math.max(...arr);
  let i = arrMax;
  let notFound = true;
  while (notFound) {
    for (let j = arrMin; j <= arrMax; j++) {
      if (i % j !== 0) {
        break;
      } else if (j === arrMax) {
        notFound = false;
        return i;
      }
    }
    i++;
  }
}

console.log(smallestCommons([5, 1]));

/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/