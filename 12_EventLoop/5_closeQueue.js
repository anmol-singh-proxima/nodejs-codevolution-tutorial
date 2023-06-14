/* This is the experiment to see the order of execution for the Close queue along with the other queues */

const fs = require('node:fs')

function experiment1() {
    const readableStream = fs.createReadStream(__filename)
    readableStream.close();
    readableStream.on('close', () => {
        console.log("readableStream Close() 1")
    })
    setImmediate(() => console.log("setImmediate() 1"))
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}

function experiment2() {
    const readableStream = fs.createReadStream(__filename)
    readableStream.close();
    readableStream.on('close', () => {
        console.log("readableStream Close() 1")
    })
    setImmediate(() => console.log("setImmediate() 1"))
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
    })
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}

function experiment3() {
    const readableStream1 = fs.createReadStream(__filename)
    readableStream1.close();
    readableStream1.on('close', () => {
        console.log("readableStream1 Close() 1")
        Promise.resolve().then(() => console.log("inner Promise.resolve() in readableStream1()"))
        process.nextTick(() => console.log("inner Process.nextTick() in readableStream1()"))
    })
    const readableStream2 = fs.createReadStream(__filename)
    readableStream2.close();
    readableStream2.on('close', () => {
        console.log("readableStream2 Close() 2")
    })
    setImmediate(() => console.log("setImmediate() 1"))
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
        Promise.resolve().then(() => console.log("inner Promise.resolve() in readFile() 1"))
        process.nextTick(() => console.log("inner Process.nextTick() in readFile() 1"))
    })
    fs.readFile(__filename, () => {
        console.log("readFile() 2")
    })
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}

// experiment1()
// experiment2()
experiment3()