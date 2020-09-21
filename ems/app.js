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
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  // Assign PORT
  PORT = 8080,
  Employee = require("./models/employee"),
  header = require("../header.js");

// configure dotenv to load .env file
require("dotenv").config();

console.log(header.display("Anil", "Rayamajhi", "Employee Management System"));
console.log("---");

// initialize Morgan
app.use(logger("tiny"));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("views", path.resolve(__dirname, "views"));
// Import static assets
app.use(express.static(path.resolve(__dirname, "public")));
// Set View Engine as EJS
app.set("view engine", "ejs");

// mLab connection
// Pulling DATABASE_URL from .env file
var mongoDB = process.env.DATABASE_URL;
mongoose
  .connect(mongoDB, {
    // commented useMongoClient as it was
    // suggested for the mongoose version 5.x
    // useMongoClient: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection to the database instance was successful");
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
  });

mongoose.Promise = global.Promise;
var db = mongoose.connection;

/**
 * @Route landing Page
 * @Method GET
 */
app.get("/", function (request, response) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      response.render("index", {
        title: "EMS | Home",
        employees: employees,
      });
    }
  });
});

/**
 * @Route create page
 * @Method GET
 */
app.get("/new", function (request, response) {
  response.render("new", {
    title: "EMS | New",
  });
});

app.post("/process-employee-form", function (req, res) {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send("Entries must have a first and last name");
    return;
  }

  // get the request's form data
  const firstName = req.body.firstName,
    lastName = req.body.lastName,
    position = req.body.position;

  // create a fruit model
  let employee = new Employee({
    firstName,
    lastName,
    position,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("successfully saved!");
      res.redirect("/");
    }
  });
});

/**
 * @Route Employee Show page
 * @Method GET
 */
app.get("/show/:employeeId", function (request, response) {
  const employeeId = request.params["employeeId"];
  Employee.find({ _id: employeeId }, function (err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      if (!!employee) {
        response.render("view", {
          title: "EMS | View",
          employee: employee,
        });
      } else {
        response.redirect("/");
      }
    }
  });
});

// Spinning Server at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
