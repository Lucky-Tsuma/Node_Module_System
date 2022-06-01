// The http module is used to build networking applications that listen for http requests on a given port
const http = require('http')

// using the http.createServer method creates an event object.
// Check the documentation no need to memorise what is here.
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world')
        res.end()
    }

    if(req.url === '/api/progress') {
        res.write(JSON.stringify(['one', 'two', 'three']))
        res.end()
    }
})

server.listen(3000)

console.log('Listening on port 3000...')

// In the real world we use the Express framework to build networking applications. 
// The express framework is built on the http module
