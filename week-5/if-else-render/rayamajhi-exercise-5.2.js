/*
============================================
; Title:  Exercise 5.2 – EJS Templates
; Author: Professor Krasso
; Date:   6 September 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates EJS 'if-else-render' operations.
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

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 5.2 - EJS Templates")
);
console.log("---");

// initialize Morgan
app.use(logger("tiny"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var names = ["John", "Erlich", "Dinesh", "Jian-Yang", "Gavin", "Bertram"];

app.get("/", function (request, response) {
  response.render("index", {
    names,
  });
});

// Server Spinning at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
