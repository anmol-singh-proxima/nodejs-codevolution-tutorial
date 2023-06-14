/* This is the experiment to see the order of execution for the Microtask Queues: nextTick queue and promise queue in a Javascript program */

function experiment1() {
    /* This function is to see the order of execution between synchronous and asynchronous code */
    console.log("This is line 1")
    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    process.nextTick(() => console.log("Process.nextTick() 1"))
    console.log("This is line 2");
    Promise.resolve().then(() => console.log("Promise.resolve() 2"))
    process.nextTick(() => console.log("Process.nextTick() 2"))
    console.log("This is line 3");
}

function experiment2() {
    /* This function is to see the order of execution in between the nextTick queue and promise queue */
    process.nextTick(() => console.log("process.nextTick() 1"))
    process.nextTick(() => {
        console.log("process.nextTick() 2")
        process.nextTick(() => console.log("This is inner process.nextTick() in process.nextTick() 2"))
        Promise.resolve().then(() => console.log("This is inner Promise.resolve() in process.nextTick() 2"))
    })
    process.nextTick(() => console.log("process.nextTick() 3"))

    Promise.resolve().then(() => console.log("Promise.resolve() 1"))
    Promise.resolve().then(() => {
        console.log("Promise.resolve() 2")
        process.nextTick(() => console.log("This is inner process.nextTick() in Promise.resolve() 2"))
        Promise.resolve().then(() => console.log("This is inner Promise.resolve() in Promise.resolve() 2"))
    })
    Promise.resolve().then(() => console.log("Promise.resolve() 3"))
}

experiment1()
experiment2()