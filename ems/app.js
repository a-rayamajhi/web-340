/*
============================================
; Title:  Employee Management System
; Author: Anil Rayamajhi
; Description: Employee Management System to
;              archive employee records and information.
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
  Employee = require("./models/employee");

app.set("views", path.resolve(__dirname, "views"));
// Import static assets
app.use(express.static(path.resolve(__dirname, "public")));
// Set View Engine as EJS
app.set("view engine", "ejs");
app.use(logger("short"));

/**
 * @Route landing Page
 * @Method GET
 */
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
    employees: Employee,
  });
});

/**
 * @Route create page
 * @Method GET
 */
app.get("/new", function (request, response) {
  response.render("new", {
    title: "Create page",
  });
});

/**
 * @Route Employee Show page
 * @Method GET
 */
app.get("/show/:employeeId", function (request, response) {
  var employee = Employee.filter((el) => el.id == request.params.employeeId);
  console.log(employee, request.params.employeeId);
  response.render("view", {
    title: "View page",
    employee: employee,
  });
});

// Spinning Server at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
