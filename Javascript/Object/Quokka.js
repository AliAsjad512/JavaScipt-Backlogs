const person={
    x:10,
    firstname: 'Ali',
    lastName: "Abbas",
    hobbies : ['Coding','Gym'],
    isMarried :false,
    hasGf:false,
    getFullName:function(){
        return 'Ali Abbas'
    },

    address:{
        hno:1,
        street:1,
        countryCode: 'US',
        state: 'PB'
    }
}
console.log(person.address)


const remote ={
    color: 'black',
    brand: 'xyx',
    dimensions : { height:1, width:1}
}