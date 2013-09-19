
var space = require('to-space-case');


/**
 * Expose `toSentenceCase`.
 */

module.exports = toSentenceCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toSentenceCase (string) {
  return space(string).replace(/[a-z]/i, function (letter) {
    return letter.toUpperCase();
  });
}