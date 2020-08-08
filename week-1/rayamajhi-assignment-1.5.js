/*
============================================
; Title:  Assignment 1.5 - Hello World
; Author: Professor Massoud
; Date:   8 Aug 2020
; Modified By: Anil Rayamajhi
; Description: Demonstrates how to create a Node.js server
;===========================================
*/

// import statement
const http = require("http"),
  header = require("../header.js"),
  port = 8080;

console.log(
  header.display("Anil", "Rayamajhi", "Assignment 1.5 - Hello World")
);
console.log("---");
console.log("Firing Up Node Server!");

function processRequest(req, res) {
  const body = "Spinning Node Server at Port: " + port;

  const contentLength = body.length;

  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain",
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(port);
