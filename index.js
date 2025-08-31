// let s= " love code and I love JavaScript";

// let result = s.trim().split(" ");
// let count=[];
// let res;
// const myMap = new Map();
// result.forEach((item,index) => {


 
// if(myMap.has(item)){
// myMap.set(item,myMap.get(item)+1);
// }
// else{
//   myMap.set(item,1)
// }


  
//})

 
//console.log(myMap);



// let data = { 
//   moreData: {one: 'one', two: '2', three: 'three'},
//   city: 'New York',
//   favFood: 'Steak',
//   favSite: 'StackOverflow',
// };

// Object.entries(data).map(([key,value]) => value 
//   ? console.log(`this is the ${key} and the value is: ${value.two ?? value}`)
//   : ''
// )


// var groupBy = function(xs, key) {
    
//   return xs.reduce(function(rv, x) {
    
//     (rv[x[key]] ??= []).push(x);
    
//     return rv;
//   }, {});
// };

//console.log(groupBy(['one', 'two', 'three'], 'length'));

// or newer

// console.log({...Object.groupBy(['ok', 'low', 'high'], ({length}) => length)})





// const obj1 = { name: "Ali", address: { city: "NY" } };
// const obj2 = obj1; 

// obj2.address.city = "LA";

// console.log(obj1.address.city); 


let SalesData = [

  { product : "Laptop", price:100},
    { product : "Smartphone", price:200},
      { product : "Headphone", price:300},

  
]

let totalSales = SalesData.reduce((acc,sale) =>{
//acc= acc +sale.price;
return acc+sale.price;
},0)


console.log(totalSales);
