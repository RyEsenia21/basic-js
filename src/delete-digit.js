const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Math.abs(n).toString();
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const ttlnum = parseInt(arr.slice(0, i) + arr.slice(i + 1));
    if (ttlnum > max) {
      max = ttlnum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
