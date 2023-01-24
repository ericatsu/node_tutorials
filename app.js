const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`User Data of ${name} with id: ${id}`);
})

customEmitter.emit('response', 'Eric', 20)

customEmitter.on('response2', (name, id) => {
  console.log(`User 2 Data; ${name} and ${id}`);
})

customEmitter.emit('response2', 'Eri' , 2)

