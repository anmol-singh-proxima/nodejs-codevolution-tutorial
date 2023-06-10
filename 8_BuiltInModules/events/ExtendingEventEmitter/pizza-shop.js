// Call EventEmitter class from events-module
const EventEmitter = require('node:events')

// Class PizzaShop for ordering pizza
class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
        this.size = ''
        this.toppings = ''
        this.price = 0
    }

    // To take order from the customer
    order({size, toppings}) {
        this.orderNumber++
        this.size = size
        this.toppings = toppings
        // To emit the event 'order' and passing argument containing size and toppings of the pizza
        this.emit('order', {size, toppings});
    }
    
    // To Calculate the bill amount for paying the bill
    payBill() {
        if(this.size === 'large') {
            this.price += 300
        }
        if(this.toppings === 'mushrooms') {
            this.price += 100
        }
        // To emit the event 'pay-bill' and passing the price as argument
        this.emit('pay-bill', {price: this.price});
    }

    // To display orderNumber
    displayOrder() {
        console.log("Order Number:", this.orderNumber)
    }
}

module.exports = PizzaShop;