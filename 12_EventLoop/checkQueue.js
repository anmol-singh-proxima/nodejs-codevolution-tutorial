/* This is the experiment to see the order of execution for the Check queue along with the other queues */

const fs = require('node:fs')

function experiment1() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
    })
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
    setImmediate(() => console.log("setImmediate() 1"))
}

function experiment2() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
        setImmediate(() => console.log("innner setImmediate() 1"))
    })
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
    setImmediate(() => console.log("setImmediate() 1"))
}

function experiment3() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
        setImmediate(() => console.log("inner setImmediate() 1"))
        Promise.resolve().then(() => console.log("inner Promise.resolve() 1"))
        process.nextTick(() => console.log("inner Process.nextTick() 1"))
    })
    setImmediate(() => console.log("setImmediate() 1"))
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}

function experiment4() {
    fs.readFile(__filename, () => {
        console.log("readFile() 1")
        setImmediate(() => console.log("inner setImmediate() 1"))
        setTimeout(() => console.log("inner setTimeout() 1"), 0)
        Promise.resolve().then(() => console.log("inner Promise.resolve() 1"))
        process.nextTick(() => console.log("inner Process.nextTick() 1"))
    })
    setImmediate(() => console.log("setImmediate() 1"))
    setTimeout(() => console.log("setTimeout() 1"), 0)
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
}


function experiment5() {
    setImmediate(() => console.log("setImmediate() 1"))
    setImmediate(() => {
        console.log("setImmediate() 2")
        Promise.resolve().then(() => console.log("inner Promise.resolve() 1"))
        process.nextTick(() => console.log("inner Process.nextTick() 1"))
    })
    setImmediate(() => console.log("setImmediate() 3"))
}

function experiment6() {
    setImmediate(() => console.log("setImmediate() 1"))
    setTimeout(() => console.log("setTimeout() 1"), 0)
}

// experiment1()
// experiment2()
// experiment3()
// experiment4()
// experiment5()
experiment6()