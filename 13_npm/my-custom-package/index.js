const greet = require('./greetModule')
const upperCase = require('upper-case').upperCase

const name = upperCase('Anmol Singh')
greet(name)