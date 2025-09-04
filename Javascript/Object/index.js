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

const Person = {
    getFullname(){
      return this.fn;  
    }
}

const obj1 = {
    fname: 'Ali',
    lname: 'Abbas',
    getFullname : function(){
        if(this.lname !== undefined)
        return `${this.fname} ' ' ${this.lname}`;
    return this.fname;
    }
}

const obj2 = {
    fname: 'Saif',
    lname: 'haider',
    // getFullname : function(){
    //     return `${this.fname} ' ' ${this.lname}`
    // }
}
//obj2.__proto__=obj1;
obj1.__proto__= Person
obj2.__proto__= Person
//obj1.__proto__=null;

console.log(obj1.getFullname());
console.log(obj2.getFullname());
console.log(obj2.toString());
