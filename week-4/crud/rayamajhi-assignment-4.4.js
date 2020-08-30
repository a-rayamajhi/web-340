/*
============================================
; Title:  Assignment 4.4 - cUrl
; Author: Professor Krasso
; Date:   30 August 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates CRUD operations in a
;              Node.js API.
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

console.log(header.display("Anil", "Rayamajhi", "Exercise 4.4 - cURL"));
console.log("---");

app.use(logger("tiny"));

/**
 * Route
 * Returns Advanced Route
 */
app.get("/", function (request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function (request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function (request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function (request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

// Server Spinning at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
