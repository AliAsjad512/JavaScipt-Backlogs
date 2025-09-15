const fs = require('fs');
console.log('Starting program');

const contents = fs.readFileSync('./hello.text','utf-8');

console.log('File Reading success',contents);

console.log('End Of Program');