const callBackFunc = function greet(name) {
    console.log(`Hello ${name}`)
}

const higherOrderFunc = function greetName(callBack) {
    const name = 'Anmol'
    callBack(name)
}

higherOrderFunc(callBackFunc)