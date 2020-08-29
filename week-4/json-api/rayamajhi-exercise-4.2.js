/*
============================================
; Title:  Exercise 4.2 - JSON APIs
; Author: Professor Krasso
; Date:   29 August 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to return JSON from
;              a Node.js server.
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

console.log(header.display("Anil", "Rayamajhi", "Exercise 4.2 - JSON APIs"));
console.log("---");

const app = express();

app.use(logger("tiny"));

/**
 * Route
 * Returns Advanced Route
 */
app.get("/customer/:id", function (request, response) {
  console.log(request.params.id);
  var id = parseInt(request.params.id);

  response.json({
    firstName: "Anil",
    lastName: "Rayamajhi",
    employeeId: id,
  });
});

// Server Spinning at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
