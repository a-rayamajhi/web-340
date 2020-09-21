/*
============================================
; Title:  Exercise 7.2 – TDD in Action
; Author: Professor Krasso
; Date:   20 September 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
