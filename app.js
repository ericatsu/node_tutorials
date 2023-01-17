const http = require('http');

const server = http.createServer((request, response) => {
 response.write('Welcome to my server')
 response.end()
})

server.listen(5000);