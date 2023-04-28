/*
Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/


const truncateString = (str, maxLength) => str.length > maxLength ? str.slice(0,maxLength) + '...' : str;

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));