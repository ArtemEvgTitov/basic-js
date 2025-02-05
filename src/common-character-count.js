const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let s2Arr = s2.split("");

  for (let char of s1) {
    const index = s2Arr.indexOf(char);
    if (index !== -1) {
      result += 1;
      s2Arr.splice(index, 1);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
