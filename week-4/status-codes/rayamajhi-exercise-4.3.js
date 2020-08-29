/*
============================================
; Title:  Exercise 4.3 – HTTP Status Codes
; Author: Professor Krasso
; Date:   29 August 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

const express = require("express"),
  http = require("http"),
  logger = require("morgan"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 4.3 – HTTP Status Codes")
);
console.log("---");

app.use(logger("tiny"));

/**
 * Route
 * Returns notfound message
 */
app.get("/not-found", function (request, response) {
  response.status(404);
  response.json({
    error: "Resource not found.",
  });
});

app.get("/ok", function (request, response) {
  response.status(200);
  response.json({
    message: "Page loaded correctly.",
  });
});

app.get("/not-implemented", function (request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented.",
  });
});

// Server Spinning at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
