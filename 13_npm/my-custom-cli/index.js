#!/usr/bin/env node

// console.log("Hello Everyone! This is Anmol Singh")

// console.log(process.argv);

// const yargs = require('yargs')
// const {argv} = yargs(process.argv)

const inquirer = require('inquirer')

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json()
    const moves = pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(0, 5))
}

/* User inquirer to make the CLI interactive */
const prompt = inquirer.createPromptModule()
prompt([{
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves"
}]).then((answers) => {
    console.log(answers)
    const pokemon = answers.pokemon
    printFiveMoves(pokemon);
})

// printFiveMoves("charmander")
// printFiveMoves(argv.pokemon)