 function sumFibs(num) {
  const fibs = [0, 1];
  let newFib = 1;
  for (let i = 1; i <= num; i = newFib) {
    newFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(newFib);
  }
  const fibsOdd = fibs.filter(item => item % 2 !== 0 && item <= num);
  return fibsOdd.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumFibs(75025));

/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/