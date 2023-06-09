// importing 'EventEmitter' class from events-module
const EventEmitter = require("node:events")

// Creating an object of EventEmitter class
const emitter = new EventEmitter()

// Adding or Registering event listeners for the event 'order-pizza'
emitter.on("order-pizza", ({size, toppings}) => {
    console.log("Order Received!")
    console.log(`Baking a ${size} pizza with the ${toppings} toppings!`)
})

emitter.on("order-pizza", ({size}) => {
    if(size === 'large') {
        console.log("Serving Complimentary drinks!")
    }
})

// Emitting the event
emitter.emit('order-pizza', {
    size: 'large',
    toppings: 'mushrooms',
})