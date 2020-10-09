const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = '';
  if (Array.isArray(arr) !== true || arr === []) return false;

  arr.forEach((element) => {
    if (typeof(element) === 'string') {
      element = element.replace(/\s+/g, '');
      result = `${result}${String(element[0]).toUpperCase()}`;
    } else {
      return false;
    }
})
return result.split('').sort().join('');
}