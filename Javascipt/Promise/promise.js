
//maintine
//  console.log('Hi');

// setTimeout(() => console.log('Hello after 2 s'),0);

// Promise.resolve().then(function p1()   {
//     console.log('p1.Promise Resolve hogya')

// Promise.resolve().then(function p2()   {
//     console.log('p2.Promise Resolve hogya') })

// Promise.resolve().then(function p3()  {
//     console.log('p3. Promise Resolve hogya') })
//     Promise.resolve().then(function p4()  {
//     console.log('p4. Promise Resolve hogya') })

// }

// )

// //setTimeout(() => console.log( 'Hello adter 2 s'),0);

// console.log('BYE')


// console.log('Age is ',age);
// var age=25;
// console.log('Age is',age)


const fs= require('fs');

function readFileWithPromise(filepath,encoding){
    return new Promise((resolve,reject) => {
    fs.readFile(filepath,encoding, (err,content) =>{
       // resolve(content)  // signal do use ke then fucntion ko execute karo
       if(err){
        reject(err)
       } else{
        resolve(content)
       }
    })


    })
}

function writeFileWithPromise(filepath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,content,function (err){
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filepath){
    return new Promise((resolve,reject) => {
        fs.unlink(filepath,function(e){
            if(e){
                reject(e)
            } else{
                resolve();
            }
        })
    })
}

// const result = readFileWithPromise('./backup.txt','utf-8');

readFileWithPromise('./hello.txt','utf-8').then(content => writeFileWithPromise('./backup.txt',content))
.then(() => unlinkWithPromise('./hello.txt')).catch((e) => console.log('Error',e)).finally(() => console.log('All Done '))
//result.then((e)=> {}).catch();
console.log('Starting Program');
//const content 
// fs.readFile('./hello.txt','utf-8', function (err,content){
//     if(err){
//         console.log("Error in file reading",err)
//     } else{
//         console.log("File Reading Sucees", content)
//         fs.writeFile('backup.txt',content,function(err){
//             if(err){
//                 console.log(`Error in writing backup file`,err)
//             }
//             else {
//                 fs.unlink('./hello.txt',function(e){
//                     if(e){
//                         console.log('error deleting file',e)
//                     }
//                     else{
//                         console.log('File Delete success')
//                     }
//                 })
//             }

//         })
//     }
// });

// call back hell



//  sum(2,5, (result) => {
   
//     console.log('Result is ',result)
//  });
// //console.log(result)
// // console.log('File Reading success',content);
// console.log('End Of Program')

// function sum(a,b,cb){
//      setTimeout(() =>{
//         cb(a+b);
//     },5 * 1000)
    
// }