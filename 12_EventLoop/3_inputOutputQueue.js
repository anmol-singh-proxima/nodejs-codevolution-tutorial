/* This is the experiment to see the order of execution for the I/O queue along with the other queues */

const fs = require('node:fs')

function experiment1() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
    })
    console.log("This is line 1")
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
    console.log("This is line 2");
    Promise.resolve().then(() => console.log("Promise.resolve() 2"))
    process.nextTick(() => console.log("Process.nextTick() 2"))
    console.log("This is line 3");
}

function experiment2() {
    setTimeout(() => console.log("setTimeout() 1"), 0)
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
    })
    setTimeout(() => console.log("setTimeout() 2"), 0)
}

function experiment3() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
    })
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}

// experiment1()
// experiment2()
experiment3()