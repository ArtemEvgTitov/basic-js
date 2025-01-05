const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let letter = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== letter) {
      if (count > 0) {
        result += (count > 1 ? count : "") + letter;
      }
      letter = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    result += (count > 1 ? count : "") + letter;
  }

  return result;
}

module.exports = {
  encodeLine,
};
