function checkObj(obj, checkProp) {
  return obj.hasOwnProperty(checkProp) === true ? obj[checkProp] : "Not Found";
}