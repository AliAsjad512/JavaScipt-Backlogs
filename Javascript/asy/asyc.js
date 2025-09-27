const fs = require('fs');
console.log('Starting program');

const contents = fs.readFileSync('./hello.text','utf-8',function(err,content){
if(err){
    console.log('Error in file reading')
}
else{
    console.log('File Reading success',content);
    fs.writeFile('backup.txt',content,function(err){
        if(err){
            console.log()
        }
    })
}


});

console.log('File Reading success',contents);

console.log('End Of Program');