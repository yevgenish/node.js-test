//by Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh
//https://www.youtube.com/watch?v=TlB_eWDSMt4



const log = require('./logger');

log('message');


const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

console.log('-------------');

const os = require('os');
var freemem = os.freemem();
console.log('Freemem ' + freemem);

var totalmem = os.totalmem();
console.log(`Total memory ${totalmem}`);


const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

console.log('Ok directory 01');
fs.readdir('./', function(err, files){
    if(err){
        console.log('Error 01: ', err);
    }else if(files){
        console.log('Files 01: ', files);
    }
});

console.log('Error directory 02');
fs.readdir('$', function(err, files){
    if(err){
        console.log('Error 02: ', err);
    }else if(files){
        console.log('Files 02: ', files);
    }
});

console.log('-----------');


const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

//Register a listener
eventEmitter.on('messageLogged', function(){
    console.log('Event listener called');
});
//Raise event
eventEmitter.emit('messageLogged');

console.log('-----------');

//Register a listener
eventEmitter.on('messageSent', function(args){
    console.log('Event listener on messageLogged', args);
});
//Raise event
eventEmitter.emit('messageSent', {id: 5, name: 'Best'});


console.log('-----------');

//Register a listener
eventEmitter.on('timeArrived', (args)=>{
    console.log('The time is now', args);
});
//Raise event
eventEmitter.emit('timeArrived', {time: new Date(), name: 'Bond'});
