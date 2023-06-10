// Calling node-modules
const fs = require("node:fs");
const path = require("node:path");

// Defining file names
const readFilename = path.join(__dirname, "readFile.txt");
const writeFilename = path.join(__dirname, "writeFile.txt");

// Reading File Synchronously
const fileContent = fs.readFileSync(readFilename, "utf-8");
console.log("File Content Sync:", fileContent);

// Reading File Asynchronously
fs.readFile(readFilename, "utf-8", (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Data:", data);
  }
});

// Writing File Synchronously
fs.writeFileSync(writeFilename, "Hello World!");

// Writing File Asynchronously
fs.writeFile(writeFilename, " I am Anmol.", { flag: "a" }, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File Written Successfully!");
  }
});
