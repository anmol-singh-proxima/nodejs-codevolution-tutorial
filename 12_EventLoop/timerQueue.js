/* This is the experiment to see the order of execution for the Timer queue along with the Microtask queues */

function experiment1() {
    setTimeout(() => console.log("setTimeout() 1"), 0)
    setTimeout(() => console.log("setTimeout() 2"), 0)
    setTimeout(() => console.log("setTimeout() 3"), 0)
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
    setTimeout(() => {
        console.log("setTimeout() 2")
        Promise.resolve().then(() => console.log("Inner Promise.resolve() 1"))
        process.nextTick(() => console.log("Inner Process.nextTick() 1"))
    }, 0)
    setTimeout(() => console.log("setTimeout() 3"), 0)
}

function experiment3() {
    setTimeout(() => console.log("setTimeout() 1"), 4)
    setTimeout(() => console.log("setTimeout() 2"), 2)
    setTimeout(() => console.log("setTimeout() 3"), 0)
}

// experiment1()
// experiment2()
experiment3()