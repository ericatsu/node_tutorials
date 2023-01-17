const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.end('Server home here')
    }
    else if (request.url == '/about') {
        response.end('Server About here')
    }
    else {
        response.end(`
    <h1>Oops Can't be found</h1>
    <a href='/'> home page </a>
    `)
    }
})

server.listen(5000);