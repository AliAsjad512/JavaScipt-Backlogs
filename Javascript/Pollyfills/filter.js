
const numbers = [1, 2, 3, 4, 5, 6];


if(!Array.prototype.filter){
  Array.prototype.filter=function(userFn){
       const arr=[];

    for(let i=0;i<this.length;i++){
       if (userFn(this[i], i, this)) {  // ✅ use userFn properly
        arr.push(this[i]);
      }
    }
    return arr;
  }

}

const evenNumbers = numbers.filter(number => number % 2 === 0);


console.log(evenNumbers);

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); 