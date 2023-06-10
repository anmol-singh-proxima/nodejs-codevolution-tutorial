const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Request:", req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World! This is Anmol");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
