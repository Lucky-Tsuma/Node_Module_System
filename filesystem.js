// We use the fs module to work with files in node 
// All methods in fs module are in pair, one sync and the other asynv. Use the async one
// The async methods usually take a fxn as the last argument(callback), which will be called once the operation completes.
// The fxn(also called callback usually has two parameters, Error and Result). Error is always the first parameter.
// In all cases, one parameter will have a value and the other will be null (Error and Result)
const fs = require('fs')

fs.readdir('./', (err, result) => {
    if(err) {
        console.log(`This is not how we would handle errors, but here is the error: ${err}`)
    } else (
        console.log(`Result of a successful operation: ${result}`)
    )
})