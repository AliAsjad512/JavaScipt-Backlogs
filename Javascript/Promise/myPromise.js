

function getWeather(){

    return new Promise((resolve, reject) => { 
         setTimeout(() =>{
        resolve ('sunny')
    },2*1000)
     })
    
    .catch((erro) => console.log('We found error'))
}

getWeather().then((data) => console.log(data)).catch(() =>console.log("Error in data"));



function orderFood(){
    return new Promise((resolve,reject) =>{
        const success = Math.random() > 0.5;
     setTimeout(() =>{
       success ? resolve('Pizza on the way') : reject('Kitchen is closed');
     },3*1000)
    })
}

orderFood().then((data) => console.log(data)).catch((err)=> console.log(err))

function getUser(name,age,id){
     
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
     const person = {id:1,name:"Ali", post: {
    topic: "How to handle stress",
    Description: "Hi,How are you?",
    country: "USA"
  }}
   resolve( person);

        },1*1000)
    })
}

function getPosts(data){
    
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            const processData= {...data}
 resolve(processData)
        },2*1000)
    })
}


getUser("Ali",26,512).then((data) => 
    
    {console.log(data) 

return getPosts(data)

    }).then((result2) => {console.log(result2.post)}).catch((err) =>console.log(err))





// Race Between Two Tasks
// Scenario: You are downloading from two mirrors. The first one to respond is used.

// Task: Create two promises downloadFromMirror1 and downloadFromMirror2 that resolve after random times. Use Promise.race() to get the fastest one.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "downloadFromMirror1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "downloadFromMirror2");
})

Promise.race([promise1,promise2]).then((value)=>{
    console.log(value);
}).catch((err) => console.log(err))



//  Failing API Call
// Scenario: A payment gateway sometimes fails.

// Task: Write a function processPayment() that randomly either resolves or rejects after 2 seconds. Handle both success and failure with .then() and .catch()


function paymentGateway(){
    return new Promise((resolve,reject) =>{
         const success = Math.random() > 0.5;
         console.log(success);
     setTimeout(() =>{
       success ? resolve('Withdrawing amount processing') : reject('Account is out of money');
     },2*1000)

    })
    
}

paymentGateway().then((amount) => {
console.log(amount)
} ).catch((err)=>{
console.log(err)
}
)


const p1 = new Promise((resolve, reject) => {
 
    resolve("first time check");
  
});

const p2 = new Promise((resolve, reject) => {
  
    resolve("second time check");
  
});

const p3 = new Promise((resolve, reject) => {
  
    resolve("third time check");
  
});

Promise.all([p1, p2, p3]).then((values) => {
    setTimeout(()=>{
console.log(values[0]);
    },1*1000)

      setTimeout(()=>{
console.log(values[1]);
    },3*1000)
      setTimeout(()=>{
console.log(values[2]);
    },1*5000)
  

  
});



const criminalCheck = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Criminal check passed"), 2000);
});

const educationCheck = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Education verified"), 3000);
});

const employmentCheck = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Employment history confirmed"), 5000);
});

Promise.all([criminalCheck, educationCheck, employmentCheck])
  .then((results) => {
    console.log("All background checks completed:");
    results.forEach((result) => console.log(result));
  })
  .catch((error) => {
    console.log("❌ One of the checks failed:", error);
  });
