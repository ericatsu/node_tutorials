const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', 'utf8')

stream.on('data', (result) => {
    console.log(result);
})

stream.on('data', (err) => {
    console.log(err);
})