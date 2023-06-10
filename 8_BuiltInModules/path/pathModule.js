const path = require('node:path')

// Filename and Directory name
console.log("Filename:", __filename)
console.log("Dirname:", __dirname)

// path.basename()
console.log("Filename Basename:", path.basename(__filename))
console.log("Dirname Basename:", path.basename(__dirname))

// path.extname()
console.log("Filename Extension:", path.extname(__filename))
console.log("Dirname Extension:", path.extname(__dirname))

// path.parse() and path.format()
console.log("Filename Parse:", path.parse(__filename))
console.log("Dirname Parse:", path.parse(__dirname))
console.log("Filename Format:", path.format(path.parse(__filename)))
console.log("Dirname Format:", path.format(path.parse(__dirname)))

// path.isAbsolute()
console.log("Filename isAbsolute:", path.isAbsolute(__filename))
console.log("Normal Path isAbsolute:", path.isAbsolute("../index.js"))

// path.join()
console.log(path.join("dir1", "dir2", "index.html"))
console.log(path.join("/dir1", "//dir2", "/index.html"))
console.log(path.join("/dir1", "/dir2", "../index.html"))
console.log(path.join(__dirname, "/index.html"))

// path.resolve()
console.log(path.resolve("dir1", "dir2", "index.html"))
console.log(path.resolve("/dir1", "//dir2", "index.html"))
console.log(path.resolve("/dir1", "/dir2", "../index.html"))
console.log(path.resolve(__dirname, "index.html"))