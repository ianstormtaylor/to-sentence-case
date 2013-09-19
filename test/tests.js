describe('to-sentence-case', function () {

var assert = require('assert');
var sentence = require('to-sentence-case');

it('the catcher in the rye', function () {
  assert('The catcher in the rye' == sentence('the catcher in the rye'));
});

});