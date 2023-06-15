/* Demostration of the server listening on localhost while doing CPU work without using Cluster Module */

const http = require('node:http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if(req.url === '/slow') {
        for(let i=0; i<9999999999; i++) {}  // Simulate CPU work
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Slow Page")
    }
})

server.listen(5000, () => console.log("Server is listening on localhost:8000"));