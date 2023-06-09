/* Calling node-modules */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

/* Function for sending Plain Response */
function plainResponse(res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World! This is Anmol");
}

/* Function for sending JSON Response */
function jsonResponse(res) {
  const avenger = {
    firstname: "Natasha",
    lastname: "Romanoff",
    heroname: "Balck Widow",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(avenger));
}

/* Function for sending HTML Response */
function htmlResponse(res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const file = path.join(__dirname, "index.html");
  const encoding = "utf-8";

  /* Sending the response using readFileSync() */
  // const html = fs.readFileSync(file, encoding);
  // res.end(html);

  /* Sending the response using streams - More efficient way */
  // fs.createReadStream(file, encoding).pipe(res);

  /* Sending the response in the form of HTML Template by using String replacement */
  let html = fs.readFileSync(file, encoding);
  const name = "Anmol Singh";
  html = html.replace("{{name}}", name);
  res.end(html);
}

/* Function for performing http routing */
function httpRouting(req, res) {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HOME PAGE");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ABOUT PAGE");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        teamLeader: "Captain America",
        spy: "Black Widow",
        god: "Thor",
        strong: "Hulk",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("PAGE NOT FOUND!");
  }
}

/* Creating an instance of the http server */
const server = http.createServer((req, res) => {
  // plainResponse(res);
  // jsonResponse(res);
  // htmlResponse(res);
  httpRouting(req, res);
});

/* Adding listener to the server instance on port 5000 */
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
