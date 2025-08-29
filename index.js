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


var groupBy = function(xs, key) {
    
  return xs.reduce(function(rv, x) {
    
    (rv[x[key]] ??= []).push(x);
    
    return rv;
  }, {});
};

//console.log(groupBy(['one', 'two', 'three'], 'length'));

// or newer

console.log({...Object.groupBy(['ok', 'low', 'high'], ({length}) => length)})