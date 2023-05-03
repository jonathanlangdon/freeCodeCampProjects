const translatePigLatin = str => {
  if (/^[aeiou]/.test(str)) {
    return str + 'way';
  } else if (!/[aeiou]/.test(str)) {
    return str + 'ay';
  } else {
    const str1 = str.match(/^[^aeiou]+/).join('');
    console.log(str1);
    const str2 = str.match(/[aeiou]+\w*/).join('');
    console.log(str2);
    return str2 + str1 + 'ay';
  }
}

console.log(translatePigLatin("rhythm"));

/* Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/