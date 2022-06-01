const Logger = require('./logger') // the class
const logger = new Logger() // An instance of the class

logger.on('eventWithDetails', (arg) => {
    console.log(`An event was called with the following details: \n id: ${arg.id} \n url: ${arg.url}`)
})

logger.log('Tsuma Mumba') // it is in this function that we emit an event. 