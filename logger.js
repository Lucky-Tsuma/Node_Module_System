const EventEmitter = require('events')

class Logger extends EventEmitter {

    log = (message) => {
        console.log(`Hello ${message}`)

        // Raise an event
        this.emit('eventWithDetails', { id: 276, url: 'https://luckytsuma.netlify.app' })
    }
}

module.exports = Logger
