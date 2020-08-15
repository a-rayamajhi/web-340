/*
============================================
; Title:  Exercise 2.3 - Routes
; Author: Professor Massoud
; Date:   14 Aug 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates Express route behaviors
;===========================================
*/

// import statement
const express = require("express"),
  http = require("http"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(header.display("Anil", "Rayamajhi", "Exercise 2.3 - Routes"));
console.log("---");

////// Routes //////
app.get("/", function (req, res) {
  res.end("Welcome to the homepage!\n");
});

app.get("/about", function (req, res) {
  res.end("Welcome to the about page!\n");
});

app.get("/contact", function (req, res) {
  res.end("Welcome to the contact page!\n");
});
//////////////////////

// Middleware to throw 404
// for non declared routes
app.use(function (req, res) {
  res.statusCode = 404;

  // Log 404
  res.end("404!\n");
});

// Start Server
http.createServer(app).listen(PORT, function () {
  console.log("Spinning Node Server on Port: %s", PORT);
});
