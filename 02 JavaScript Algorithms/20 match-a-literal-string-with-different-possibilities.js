let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

/*The petRegex regular expression is using alternation (|) to match any of the words "dog", "cat", "bird", or "fish". The test() method is then used to check if any part of the petString matches the regular expression, and the resulting boolean value is stored in the result variable.*/