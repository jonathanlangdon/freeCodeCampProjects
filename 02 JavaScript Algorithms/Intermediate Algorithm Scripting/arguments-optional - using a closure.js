function addTogether() {
  const [n1, n2] = arguments;
  if (typeof(n1) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(n2) {
      return addTogether(n1, n2);
    };
  }
  if (typeof(n2) !== 'number') {
    return undefined;
  }
  return n1 + n2;
}

console.log(addTogether(5, undefined));

/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */