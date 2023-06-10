// Calling node-modules
const fs = require("node:fs/promises");
const path = require("node:path");

// Defining filename
const readFilename = path.join(__dirname, "ReadWriteFiles", "readFile.txt");

// Reading File Asynchronously Using Promises
fs.readFile(readFilename, "utf-8")
  .then((data) => console.log("File Data:", data))
  .catch((error) => console.log("Error:", error));

// Reading File Asynchronously Using async-await
async function readFileAsync() {
  try {
    const fileData = await fs.readFile(readFilename, "utf-8");
    console.log("File Data:", fileData);
  } catch (error) {
    console.log("Error:", error);
  }
}
readFileAsync();
