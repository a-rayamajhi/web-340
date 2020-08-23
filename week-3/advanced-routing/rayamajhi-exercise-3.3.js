/*
============================================
; Title:  Exercise 3.3 - Advanced Routing
; Author: Professor Krasso
; Date:   23 August 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates advanced routing
;===========================================
*/

const express = require("express"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"), // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 3.3 - Advanced Routing")
);
console.log("---");

// Show express path to views directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use EJS as view engine
app.set("view engine", "ejs");

app.use(logger("tiny"));

/**
 * Advanced Route
 * Returns the index.ejs page
 */
app.get("/:productId", function (request, response) {
  var productId = parseInt(request.params.productId, 10);

  response.render("index", {
    productId: productId,
  });
});

// Start Server listening at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}`);
});
