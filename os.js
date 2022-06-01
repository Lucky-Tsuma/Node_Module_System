// We use the os module to get information about the current operating system
const os = require('os')

console.log(os.userInfo())
console.log(os.platform())
console.log(os.freemem())
console.log(os.totalmem())