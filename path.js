const path = require('path')

// The path.parse() method returns an object whose properties represent significant elements of the path

const pathObj = path.parse(__filename)

console.log(pathObj)

// __filename is fetched from the module wrapper function

// All javaScript code in a file is wrapped in a module wrapper function before being executed to create scope

// (function (exports, require, module, __filename, __dirname) {  
       
    
// });


// Above is the module wrapper function

