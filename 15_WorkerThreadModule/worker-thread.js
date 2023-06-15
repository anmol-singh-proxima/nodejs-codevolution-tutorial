const { parentPort } = require('node:worker_threads')

/* Simulate CPU work */
let j = 0
for(let i=0; i<9999999999; i++) {
    j++;
}  

parentPort.postMessage(j);