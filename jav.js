// console.log(x === undefined); // true
// var x = 3;





// test()

// console.log('Age is ',age);
// var age=25;

// var test=function(){
//   console.log('Testing')
//   console.log('Age is',age);
// }


const module = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());