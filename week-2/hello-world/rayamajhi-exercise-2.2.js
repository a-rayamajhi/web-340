/*
============================================
; Title:  Exercise 2.2 - Hello World with Express
; Author: Professor Massoud
; Date:   14 Aug 2020
; Modified By: Anil Rayamajhi
; Description: Creates a new server and  listens
;              on port 8080.
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

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 2.2 - Hello World with Express")
);
console.log("---");

// Middleware
app.use(function (req, res) {
  console.log("In comes a request to: " + req.url);

  // Log Hello World on Response
  res.end("Hello World\n");
});

// Start Server
http.createServer(app).listen(PORT, function () {
  console.log("Spinning Node Server on Port: %s", PORT);
});
