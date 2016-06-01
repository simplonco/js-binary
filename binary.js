//
// This is only a SKELETON file for the 'Binary' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Binary(number) {
  this.number = number;
}

Binary.prototype.toDecimal = function () {
  console.log(this.number);
}

module.exports = Binary;

// TEST
Binary('1100').toDecimal()
