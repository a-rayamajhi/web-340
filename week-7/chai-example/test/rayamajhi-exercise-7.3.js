/*
============================================
; Title:   Exercise 7.3 – Mocha and Chai
; Author: Professor Krasso
; Date:   20 September 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var fruits = require("../rayamajhi-fruits");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function () {
  it("should return an array of fruits", function () {
    var fruitsArray = fruits("Apple,Orange,Mango");
    assert(Array.isArray(fruitsArray));
  });
});
