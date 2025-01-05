const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      let str = members[i].trim();
      result += str[0].toUpperCase();
    }
  }
  if (result === "") {
    return false;
  }
  return result.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
