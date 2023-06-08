// sum = require('./add')
// require('./thor')
// require('./hulk')
// require('./iife')
// console.log("Sum:", sum(10,20))
// console.log("Sum:", sum(100,200))

const Avenger = require('./avenger')

const natasha = new Avenger("Natasha Romanoff")
console.log(natasha.getName())
natasha.setName("Black Widow")
console.log(natasha.getName())

const wanda = new Avenger("Scarlett Witch")
console.log(wanda.getName())