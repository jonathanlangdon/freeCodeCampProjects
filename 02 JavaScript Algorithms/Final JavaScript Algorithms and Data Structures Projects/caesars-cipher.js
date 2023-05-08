function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      let charNum = str.charCodeAt(i)
      let charNum2 = charNum < 78 ? charNum + 13 : charNum - 13;
      result += String.fromCharCode(charNum2)
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(rot13("SERR PBQR! PNZC"));

/*Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */