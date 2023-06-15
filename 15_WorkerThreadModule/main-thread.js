/* Demostration of the worker-thread module */

const http = require('node:http')
const path = require('node:path')
const { Worker } = require('node:worker_threads')

workerThreadFile = path.join(__dirname, './worker-thread.js')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if(req.url === '/slow') {
        const worker = new Worker(workerThreadFile)
        worker.on('message', (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end(`Slow Page ${j}`)
        })
    }
})

server.listen(5000, () => console.log("Server is listening on localhost:8000"));