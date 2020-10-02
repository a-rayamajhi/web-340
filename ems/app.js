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
  helmet = require("helmet"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  csrf = require("csurf"),
  Employee = require("./models/employee"),
  header = require("../header.js");

// configure dotenv to load .env file
require("dotenv").config();

console.log(header.display("Anil", "Rayamajhi", "Employee Management System"));
console.log("---");

// Assign PORT
app.set("port", process.env.PORT || 8080);

// setup csrf protection
var csrfProtection = csrf({ cookie: true });
// initialize Morgan
app.use(logger("tiny"));
// helmet middleware
app.use(helmet.xssFilter());
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

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

app.post("/process-employee-form", function (request, response) {
  if (!request.body.firstName || !request.body.lastName) {
    res.status(400).send("Entries must have a first and last name");
    return;
  }

  // get the request's form data
  const firstName = request.body.firstName,
    lastName = request.body.lastName,
    position = request.body.position;

  // create a employee model
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
      response.redirect("/");
    }
  });
});

/**
 * @Route Employee Show page
 * @Method GET
 */
app.get("/show/:employeeId", function (request, response) {
  const employeeId = request.params["employeeId"];
  Employee.findOne({ _id: employeeId }, function (err, employee) {
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

/**
 * @Route Employee Show page
 * @Method GET
 */
app.get("/edit/:employeeId", function (request, response) {
  const employeeId = request.params["employeeId"];
  Employee.findOne({ _id: employeeId }, function (err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      if (!!employee) {
        response.render("edit", {
          title: "EMS | Edit",
          employee: employee,
        });
      } else {
        response.redirect("/");
      }
    }
  });
});

/**
 * @Route Patch
 * @Method PATCH
 */
app.post("/edit-employee-form/:employeeId", function (request, response) {
  const employeeId = request.params["employeeId"];
  if (!request.body.firstName || !request.body.lastName) {
    res.status(400).send("Entries must have a first and last name");
    return;
  }

  // update
  Employee.findOneAndUpdate({ _id: employeeId }, request.body, {}, function (
    err
  ) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("successfully saved!");
      response.redirect("/");
    }
  });
});

/**
 * @Route Employee Delete
 * @Method DELETE
 */
app.get("/delete/:employeeId", function (request, response) {
  const employeeId = request.params["employeeId"];

  Employee.deleteOne({ _id: employeeId }, function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("Successfully Deleted!");
      response.redirect("/");
    }
  });
});

// Handling 404
app.use(function (req, res, next) {
  res.status(404).send("404");
});

// Spinning Server at port 8080
http.createServer(app).listen(app.get("port"), function () {
  console.log(`Application started on port ${app.get("port")}!`);
});
