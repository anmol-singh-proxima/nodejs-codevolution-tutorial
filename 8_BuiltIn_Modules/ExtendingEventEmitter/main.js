// Calling PizzaShop and DrinkMachine classes
const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

// Creating objects of PizzaShop and DrinkMachine classes
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

// Registering the event-listeners for the event 'order'
pizzaShop.on('order', ({size, toppings}) => {
    console.log("Order Received!")
    console.log(`Baking a ${size} pizza with the ${toppings} toppings!`)
});
pizzaShop.on('order', ({size}) => {
    drinkMachine.serveDrink(size);
})
// Registering the event-listeners for the event 'pay-bill'
pizzaShop.on('pay-bill', ({price}) => {
    console.log(`Bill amount: Rs.${price}/-`)
    console.log('Bill paid Successfully!')
})

// Ordering the pizza
pizzaShop.order({
    size: 'large',
    toppings: 'mushrooms'
})
// Paying the bill
pizzaShop.payBill()