// Function.prototype.describe=function(personName){
//     console.log(`Funtion name is ${this.name} is yours ${personName}` );
// }

// function greet(name){
//     return `Hello ${name}`;
    
// }

// greet.describe("Ali")


//function declaration
function add(a,b){
    return a+b;
}

//function expression
const substract = function(a,b){
    return a-b;
}

const multiply = (a,b) => a*b;

function applyOperation(a,b,operation){
    return operation(a,b);
}

const result = applyOperation(5,4,(x,y) => x/y);
console.log(result);







