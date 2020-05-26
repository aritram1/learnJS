
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('kiByapar', function(){
    console.log('ghore bose achi');
})

emitter.emit('kiByapar') //output : ghore bose achi

