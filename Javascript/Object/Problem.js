
//Create an object representing a type 

const teas={
 name: "Hi",
 type: "ice",
 caffine: "low"
}

//Access and print the name and types properties of the tea object 
console.log(teas.name);

console.log(teas["name"])

//if we have key in quoation "" then we use it 


//Add new properties 

teas.origin="Assam"

//Change the ice leave of the tea object to "Medium"
teas.caffine="Medum"

delete teas.type;

//Problem: Check if the tea object has propert oriin

console.log("origin" in teas)


//Problem: use a for...in loop to print all propteries of the tea object 

for(let key in teas){
    console.log(key+ ": "+teas[key]);
}


//Problem create a nested object representing different types of teas and their properties 

const myTeas={
    greentea:{
        name: "Green tea",
        cups : {
            one : "1",
            two : "2"
        }
    },
    blacktea: {
  name: "Black tea"
    }
}

// Create a copy of the object
//const teaCopy ={...myTeas};// shallow copy it copy first level keys
const teaCopy=JSON.stringify(myTeas)
const anotherCopy = teas; // reference


console.log(teaCopy)



Object.prototype.chai = function(){
return "chai aur code";
}

const tea = {
    name: "Ice tea lemon",
    type : "cool"
}

console.log(tea.chai())


