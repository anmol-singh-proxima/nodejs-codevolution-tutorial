/* Using the Cluster Module in program to implement the Cluster master and worker scenario */

const cluster = require('node:cluster')
const http = require('node:http')
const os = require('node:os')

/* Check the number of workers can this Cluster create in this machine */
console.log("Number of workers:", os.cpus().length);

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
    cluster.fork()
} else {
    console.log(`Worker ${process.pid} started running`)
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
}