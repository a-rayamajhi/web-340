/*
============================================
; Title:  Exercise 6.3 – Mongoose
; Author: Professor Krasso
; Date: 11 September 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

const express = require("express"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"),
  mongoose = require("mongoose"),
  // initialize the express app
  app = express(),
  // Assign PORT
  PORT = 8080,
  header = require("../../header.js");

// configure dotenv to load .env file
require("dotenv").config();

console.log(header.display("Anil", "Rayamajhi", "Exercise 6.3 – Mongoose"));
console.log("---");

// initialize Morgan
app.use(logger("tiny"));

// Load Process.env
console.log(process.env);

// mLab connection
// Pulling DATABASE_URL from .env file
var mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB, {
  // commented useMongoClient as it was
  // suggested for the mongoose version 5.x
  // useMongoClient: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

// Test DB Connection
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance 🤘🏽");
});

// Spinning Server at port 8080
http.createServer(app).listen(PORT, function () {
  console.log(`Application started on port ${PORT}!`);
});
