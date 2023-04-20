const s = [5, 7, 2];
function editInPlace() {
  s.unshift(s.pop[2]);
}
editInPlace();
console.log(s);