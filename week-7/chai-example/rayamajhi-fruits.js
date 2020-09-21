/*
============================================
; Title:   Exercise 7.3 – Mocha and Chai
; Author: Professor Krasso
; Date:   20 September 2020
; Modified By: Anil Rayamajhi
; Description: Function used in a Chai test.
;===========================================
*/

/**
 *
 * @param {String} str
 */
function fruits(str) {
  return str.split(",");
}

module.exports = fruits;
