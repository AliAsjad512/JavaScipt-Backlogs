let SalesData = [
  { product : "Laptop", price:100},
  { product : "Smartphone", price:200},
  { product : "Headphone", price:300},
];



if(!Array.prototype.reduce){
  Array.prototype.reduce = function(userFn,initialValue){
    let originalArray=this;
    let accumulator;
    let startIndex;
    if(initialValue===undefined){
      accumulator=0;
      startIndex=0;
    }
    else{
      accumulator=originalArray[0];
      startIndex=1;
    }
    for(let i=startIndex;i<originalArray.length;i++){
      accumulator=userFn(accumulator,originalArray[i],i,originalArray)
    }
    return accumulator;
  }
  
}



let totalSales = SalesData.reduce((acc,sale)=>{
  return acc+sale.price;
},0);

console.log(totalSales);




// import java.util.HashMap;
// import java.util.Map;

// public class HashMapExample {
//     public static void main(String[] args) {
//         HashMap<String, Integer> studentScores = new HashMap<>();
//         studentScores.put("Alice", 95);
//         studentScores.put("Bob", 88);
//         studentScores.put("Charlie", 72);

//         for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
//             System.out.println("Student: " + entry.getKey() + ", Score: " + entry.getValue());
//         }
//     }
// }













// Polyfill first
// if (!Array.prototype.Myreduce) {
//   Array.prototype.Myreduce = function (userfn, initialValue) {
//     const originalArray = this;
//     let accumulator;
//     let startIndex;

//     if (initialValue !== undefined) {
//       accumulator = initialValue;
//       startIndex = 0;
//     } else {
//       accumulator = originalArray[0];
//       startIndex = 1;
//     }

//     for (let i = startIndex; i < originalArray.length; i++) {
//       accumulator = userfn(accumulator, originalArray[i], i, originalArray);
//     }

//     return accumulator;
//   };
// }

// // ✅ Now call it
// let totalSales = SalesData.Myreduce((acc, sale) => {
//   return acc + sale.price;
// }, 0);

// console.log(totalSales); // Expected: 600
