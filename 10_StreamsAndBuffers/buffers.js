const buffer = new Buffer.from("Anmol Singh");

buffer.write("Priya");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());