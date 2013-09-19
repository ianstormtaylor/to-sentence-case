describe('to-sentence-case', function () {

var assert = require('assert');
var sentence = require('to-sentence-case');

it('shouldnt touch sentence case', function () {
  assert('A sentence case string.' == sentence('A sentence case string.'));
});

it('should convert space case', function () {
  assert('A space case string' == sentence('a space case string'));
});

it('should convert camel case', function () {
  assert('A camel case string' == sentence('aCamelCaseString'));
});

it('should convert snake case', function () {
  assert('A snake case string' == sentence('a_snake_case_string'));
});

it('should convert dot case', function () {
  assert('A dot case string' == sentence('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('A title: case of string' == sentence('A Title: Case of String'));
});

it('should convert constant case', function () {
  assert('A constant case string' == sentence('A_CONSTANT_CASE_STRING'));
});

});