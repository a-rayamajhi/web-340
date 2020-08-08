/*
============================================
; Title:  Exercise 1.3 - Modules
; Author: Professor Massoud
; Date:   8 Aug 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

// import statement
const url = require("url"),
  header = require("../header.js");

console.log(header.display("Anil", "Rayamajhi", "Exercise 1.3 - Modules"));
console.log("---");

const parsedURL = url.parse("https://nodejs.org/en?name=anil");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
