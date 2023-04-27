const findLongestWordLength = str => str.split(' ').reduce((longest, cur) => cur.length > longest.length ? cur : longest).length;

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));