// Solution 1

// function confirmEnding(str, target) {
//   const endLetters = new RegExp(target + '$');
//   return endLetters.test(str);
// }

// Solution 2

const confirmEnding = (str, target) => str.slice(-target.length) === target;

console.log(confirmEnding("Bastian", "n"));

/*
Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/