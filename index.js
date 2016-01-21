
var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSentenceCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toSentenceCase(string) {
  return clean(string).replace(/[a-z]/i, function (letter) {
    return letter.toUpperCase()
  }).trim()
}
