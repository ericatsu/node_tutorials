const http = require('http');

const server = http.createServer((request, response) => {
    response.write('My server created')
    response.end()
})

server.listen(5000);