/*
============================================
; Title:  Exercise 3.2 - Logging
; Author: Professor Krasso
; Date:   23 August 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to configure the Morgan logger
;===========================================
*/

const express = require("express"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(header.display("Anil", "Rayamajhi", "Exercise 3.2 - Logging"));
console.log("---");

// Show express path to views directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use EJS as view engine
app.set("view engine", "ejs");

app.use(logger("tiny"));

/**
 * Route
 * Returns the index.ejs page
 */
app.get("/", function (request, response) {
  response.render("index", {
    message: "Morgan Logger",
  });
});

// Start Server listening at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}`);
});
