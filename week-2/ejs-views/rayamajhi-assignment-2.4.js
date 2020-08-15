/*
============================================
; Title:  Assignment 2.4 - EJS Views
; Author: Anil Rayamajhi
; Date:   14 Aug 2020
; Description: Creates a Node.js server with EJS view engine
;===========================================
*/

// import statement
const express = require("express"),
  http = require("http"),
  path = require("path"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(header.display("Anil", "Rayamajhi", "Assignment 2.4 - EJS Views"));
console.log("---");

// Show express path to views directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use EJS as view engine
app.set("view engine", "ejs");

/**
 * Route
 * Returns the index.ejs page
 */
app.get("/", function (req, res) {
  res.render("index", {
    firstName: "Anil",
    lastName: "Rayamajhi",
    address: "Los Angeles, CA",
  });
});

// Middleware to throw 404
// for non declared routes
app.use(function (req, res) {
  res.statusCode = 404;

  // Log 404
  res.end("404!\n");
});

// Start Server listening at port 8080
http.createServer(app).listen(PORT, function () {
  console.log("Spinning Node Server on Port: %s", PORT);
});
