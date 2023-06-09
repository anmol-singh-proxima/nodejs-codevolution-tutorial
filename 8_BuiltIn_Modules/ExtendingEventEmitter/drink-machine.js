// DrinkMachine class to serve drinks if the pizza size is large
class DrinkMachine {
    // Getting the size of the pizza
    serveDrink(size) {
        // Checking if the size of the pizza is large then Serve the Complimentary drinks
        if(size === 'large') {
            console.log("Serving Complimentary Drink!")
        }
    }
}

module.exports = DrinkMachine;