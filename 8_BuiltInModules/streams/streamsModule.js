/* Calling node-modules */
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

/* Defining filenames */
const readFilename = path.join(__dirname, "readFile.txt");
const writeFilename = path.join(__dirname, "writeFile.txt");
const zipFilename = path.join(__dirname, "./zipFile.txt.gz");

/* Creating an object of gzip() to create a zip file */
const gzip = zlib.createGzip();

/* Creating a stream for reading the file */
const readableStream = fs.createReadStream(readFilename, {
  encoding: "utf-8",
  highWaterMark: 32,
});

/* Creating a stream for writing the file */
const writeableStream = fs.createWriteStream(writeFilename);

/* Creating an event-listener for reading the file content through readableStream, streams extends the EventEmitter class internally */
// readableStream.on("data", (chunk) => {
//   console.log("Chunk:", chunk);
//   writeableStream.write(chunk);
// });

/* Creating a pipe to join the readableStream and writeableStream */
readableStream.pipe(writeableStream);

/* Creating a chain of pipe using zlib-module */
readableStream.pipe(gzip).pipe(fs.WriteStream(zipFilename));
