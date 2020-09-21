/*
============================================
; Title:  employee.js
; Author: Anil Rayamajhi
; Date:   20 September 2020
; Description: File for the Employee database model
;===========================================
*/

// Require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String },
});

// Export the model so its publicly available.
module.exports = mongoose.model("Employee", EmployeeSchema);
