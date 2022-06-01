// EventEmitter is a class which is one of the core building blocks of node.js
// We call that class by loading the events module
// The convention to naming classses esp in node is to PascalCase them
// We the create an instance of that class(emitter in our case) that we use to call the class' methods
const EventEmitter = require('events')

const emitter = new EventEmitter()

// Register a listener to an event
emitter.on('messageLogged', () => {
    console.log('A registered event has just been called')
})

// Registering a listener to an event with details
emitter.on('eventWithDetails', (arg) => {
    console.log(`An event was called with the following details: \n id: ${arg.id} \n url: ${arg.url}`)
})

// Raise an event
emitter.emit('messageLogged')

// We can as well pass some details about an event as we raise the event by passing some event arguments
emitter.emit('eventWithDetails', { id: 276, url: 'https://luckytsuma.netlify.app' })