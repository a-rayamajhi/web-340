/*
============================================
; Title:  Exercise 5.3 – Pug Templates
; Author: Professor Krasso
; Date:   6 September 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates the Pug view engine.
;===========================================
*/

const express = require("express"),
  http = require("http"),
  pug = require("pug"),
  path = require("path"),
  logger = require("morgan"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

console.log(
  header.display("Anil", "Rayamajhi", "Exercise 5.3 – Pug Templates")
);
console.log("---");

// initialize Morgan
app.use(logger("tiny"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function (request, response) {
  response.render("index", {
    message: "This Page is Using Pug View Engine!",
  });
});

// Server Spinning at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
