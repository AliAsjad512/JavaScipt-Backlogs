// const person={
//     x:10,
//     firstname: 'Ali',
//     lastName: "Abbas",
//     hobbies : ['Coding','Gym'],
//     isMarried :false,
//     hasGf:false,
//     getFullName:function(){
//         return 'Ali Abbas'
//     },

//     address:{
//         hno:1,
//         street:1,
//         countryCode: 'US',
//         state: 'PB'
//     }
// }
// console.log(person.address)


// const remote ={
//     color: 'black',
//     brand: 'xyx',
//     dimensions : { height:1, width:1}
// }


const courses ={
    "170" : { title: "Introduction to Programming", description:"Develop algorithms for computers", creditHours:5},
     "250" : { title: "Web Development", description:"Buid web applications", creditHours:4},
     "310" : { title: "Operating Systmes", description:"Process management and memory management", creditHours:3},
      "430" : { title: "Articial Intelligence", description:"Simualate human thinking", creditHours:2}
}

for (let key in courses) {
if(courses[key].creditHours > 3){

  console.log(`${key}: ${courses[key].title}`);
}
}