const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('This is the home page');
  } else if (request.url === '/about') {
    for (let i = 0; i < 1000; i++) {
     for (let j = 0; j < 1000; j++) {
         response.end(`${i} ${j}`)
     }
    }
  } else {
    response.end('error')
  }
})

server.listen(5000, () => { 
    console.log('Server is listen on port: 5000');
})