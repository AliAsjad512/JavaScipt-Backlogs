// let person1={
//     personsName: "ali",

//     greet:function(){
//         console.log(`Hello,${this.personsName}`)
//     }
// }


// let person2 = {
//     personsName: "Asjad",
// }


// person1.greet.bind({personsName: "Abbas"});




const a =1;
const b=2;

//console.log('SUM',a+b);

//setTimeout delay the action or proceess
//it take time in mililseconds 

//setTimeout( function() { console.log('Ali Asjad Abbas')},1000*5)
//setTimeout(() => { console.log('I am delay')},1000*5)
// setTimeout(() => { console.log('I am delay')},0)
//0 means instentiy here 
//output
// I am delay
// Ali Asjad Abbas


// const obj ={
//     personName: 'Zamin',
//     greet:function(){
//         console.log(`Hello, ${this.personName}`)
//     }
// }



// setTimeout(obj.greet,2*1000)



// console.log('Hello from JS');

// setTimeout(() => console.log('A 2 S'),10*1000);

// console.log('Bye Bye');


const obj = {
    personName : 'Qaim',
    greet :function(){
        console.log(`Hello, ${this.personName}`)
    }
}

console.log('HI')

setTimeout(obj.greet.bind(obj),5*1000)
console.log('BYE')

// function xyz(){
//     const abc=1;
// }


let arry=[1,2,3,4,5];


function SumValue(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum= sum+numbers[i];
    }


    return sum;
}

let result=SumValue(arry);

console.log(result)