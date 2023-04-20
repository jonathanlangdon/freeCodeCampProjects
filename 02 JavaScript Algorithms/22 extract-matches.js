let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

/*You can also extract the actual matches you found with the .match() method. Note that the .match syntax is the "opposite" of the .test method you have been using thus far. */