const EventEmitter = require('node:events');

const time = () => {
  const currentDate = new Date();
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
};

const EventBus = new EventEmitter();

function scenario1() {
    /* When event listeners execute synchronous blocking code as seen in this example, the next listener is not notified until the first listener completes execution of the synchronous blocking code. */

    // Listener 1
    EventBus.on('event', (message) => {
        console.log(`${time()} Listener 1 - processing event`);
        for (let i = 0; i < 6e8; i += 1) {
        // Intentionally empty
        }
        console.log(`${time()} Listener 1 - processed: ${message}`);
    });
    
    // Listener 2
    EventBus.on('event', (message) => {
        console.log(`${time()} Listener 2 - processing event`);
        console.log(`${time()} Listener 2 - processed: ${message}`);
    });
    
    // Emitting event
    EventBus.emit('event', 'Test Event');
}


function scenario2() {
    /* To take full advantage of EventListener the listeners should execute asynchronous non-blocking code. However, wrapping a synchronous code into an async function is not enough. The 2nd listener is still blocked and waiting for the async function to complete */

    // Listener 1
    EventBus.on('event', async (message) => {
        console.log(`${time()} Listener 1 - processing event`);
    
        async function extracted() {
            for (let i = 0; i < 6e8; i += 1) {
                // Intentionally empty
            }
        }
    
        console.log(`${time()} Listener 1 - about to await`);
        await extracted();
        console.log(`${time()} Listener 1 - await completed`);
        console.log(`${time()} Listener 1 - processed: ${message}`);
    });
    
    // Listener 2
    EventBus.on('event', (message) => {
        console.log(`${time()} Listener 2 - processing event`);
        console.log(`${time()} Listener 2 - processed: ${message}`);
    });
    
    // Emitting event
    EventBus.emit('event', 'Test Event');
}


function scenario3() {
    /* To take full advantage of EventListener the listeners should execute asynchronous non-blocking code. Here we are using setTimeout() in order to execute code asynchronously. */
    
    // Listener 1
    EventBus.on('event', async (message) => {
        console.log(`${time()} Listener 1 - processing event`);
    
        function extracted() {
            for (let i = 0; i < 6e9; i += 1) {
                // Intentionally empty
            }
            console.log(`${time()} Listener 1 - finished the long loop`);
        }
    
        console.log(`${time()} Listener 1 - about to execute setTimeout`);
        setTimeout(extracted, 0);
        console.log(`${time()} Listener 1 - setTimeout completed`);
        console.log(`${time()} Listener 1 - processed: ${message}`);
    });
    
    // Listener 2
    EventBus.on('event', (message) => {
        console.log(`${time()} Listener 2 - processing event`);
        console.log(`${time()} Listener 2 - processed: ${message}`);
    });
    
    // Emitting event
    EventBus.emit('event', 'Test Event');
}


function scenario4() {
    /*  To take full advantage of EventListener the listeners should execute asynchronous non-blocking code. Here we are using setImmediate() in order to execute code asynchronously. */

    // Listener 1
    EventBus.on('event', async (message) => {
        console.log(`${time()} Listener 1 - processing event`);
    
        function extracted() {
            for (let i = 0; i < 6e9; i += 1) {
                // Intentionally empty
            }
            console.log(`${time()} Listener 1 - finished the long loop`);
        }
    
        console.log(`${time()} Listener 1 - about to execute setImmediate`);
        setImmediate(extracted);
        console.log(`${time()} Listener 1 - setImmediate completed`);
        console.log(`${time()} Listener 1 - processed: ${message}`);
    });
    
    // Listener 2
    EventBus.on('event', (message) => {
        console.log(`${time()} Listener 2 - processing event`);
        console.log(`${time()} Listener 2 - processed: ${message}`);
    });
    
    // Emitting event
    EventBus.emit('event', 'Test Event');
}


// scenario1()
// scenario2()
// scenario3()
scenario4()