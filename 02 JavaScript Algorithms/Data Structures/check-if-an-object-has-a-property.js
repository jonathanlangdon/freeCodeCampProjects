let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return 'Alan' in userObj && 'Jeff' in userObj && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan');
}

console.log(isEveryoneHere(users));

/* Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise. */