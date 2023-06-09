/* CommonJS Modules */
sum = require("./1_CommonJS_Modules/add");
console.log("Sum:", sum(10, 20));
console.log("Sum:", sum(100, 200));

/* Module Scope */
require("./2_Module_Scope/thor");
require("./2_Module_Scope/hulk");

/* Module Wrapper */
require("./3_Module_Wrapper/iife");

/* Module Caching */
const Avenger = require("./4_Module_Caching/avenger");
const natasha = new Avenger("Natasha Romanoff");
console.log(natasha.getName());
natasha.setName("Black Widow");
console.log(natasha.getName());
const wanda = new Avenger("Scarlett Witch");
console.log(wanda.getName());

/* Module Import Patterns */
const math = require("./5_Import_Export_Patterns/math");
console.log(math.add(20, 10));
console.log(math.sub(20, 10));
console.log(math.mul(20, 10));

/* Import JSON */
const data = require("./7_Import_Json/data.json")
console.log("Data:", data)

/* BuiltIn Modules */
require('./8_BuiltIn_Modules/pathModule')

/* CallBack function */
require('./9_CallBacks/callBackFunction')