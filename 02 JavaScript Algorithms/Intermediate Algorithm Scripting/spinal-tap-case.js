const spinalCase = str => str
        .replace(/([a-z.])([A-Z.])/g, '$1 $2')
        .toLowerCase()
        .replace(/[_\s]/g, '-')

console.log(spinalCase('This Is_SpinalTap'));

/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/