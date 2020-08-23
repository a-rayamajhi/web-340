/*
============================================
; Title:  Assignment 3.4 - Putting it all together
; Author: Professor Krasso
; Date:   23 August 2020
; Modified By: Anil Rayamajhi
; Description: Base server configurations for a fully working Express application.
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
  header.display(
    "Anil",
    "Rayamajhi",
    "Assignment 3.4 - Putting it all together"
  )
);
console.log("---");

// Show express path to views directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use EJS as view engine
app.set("view engine", "ejs");

app.use(logger("short"));

/**
 * Route
 * Returns index.ejs page
 */
app.get("/", function (request, response) {
  response.render("index", {
    message: "home page".toUpperCase(),
  });
});

/**
 * Route
 * Returns about.ejs page
 */
app.get("/about", function (request, response) {
  response.render("about", {
    message: "about page".toUpperCase(),
  });
});

/**
 * Route
 * Returns contact.ejs page
 */
app.get("/contact", function (request, response) {
  response.render("contact", {
    message: "contact page".toUpperCase(),
  });
});

/**
 * Route
 * Returns products.ejs page
 */
app.get("/products", function (request, response) {
  response.render("products", {
    message: "products page".toUpperCase(),
  });
});

http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}`);
});
