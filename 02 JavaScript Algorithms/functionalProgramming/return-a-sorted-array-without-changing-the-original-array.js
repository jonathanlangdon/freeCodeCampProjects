const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArr = [...arr];
  return newArr.sort((a, b) => a - b)
}

console.log(nonMutatingSort(globalArray));

/*
JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
*/