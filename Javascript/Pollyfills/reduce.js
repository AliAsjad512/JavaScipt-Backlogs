let SalesData = [
  { product : "Laptop", price:100},
  { product : "Smartphone", price:200},
  { product : "Headphone", price:300},
];

// Polyfill first
if (!Array.prototype.Myreduce) {
  Array.prototype.Myreduce = function (userfn, initialValue) {
    const originalArray = this;
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = originalArray[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < originalArray.length; i++) {
      accumulator = userfn(accumulator, originalArray[i], i, originalArray);
    }

    return accumulator;
  };
}

// ✅ Now call it
let totalSales = SalesData.Myreduce((acc, sale) => {
  return acc + sale.price;
}, 0);

console.log(totalSales); // Expected: 600
