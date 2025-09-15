const arr = [1, 2, 3, 4, 5, 6];

function enableNegIndexing(targetArr) {
  return new Proxy(targetArr, {
    set(target, prop, value) {
      target[prop] = `${value}`;
    },
    get(target, prop) {
      return target[prop];
    },
  });
}

const proxyArr=enableNegIndexing(arr)

//const proxyArr = enableNegIndexing(arr);
//const proxyArr = enableNegIndexing([...arr, 11]);
console.log(`Original Arr`, arr);
console.log(`ProxyArr Arr`, proxyArr);

arr[1] = 111;
console.log(`Updated Arr`, arr);
console.log(`ProxyArr updated Arr`, proxyArr);
