let user = { name: "Ali", age: 25 };

let proxy = new Proxy(user, {
  get(target, property) {
    console.log(`Getting property: ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true; // must return true for success
  }
});

console.log(proxy.name);   // Logs: Getting property: name → Ali
proxy.age = 30;     


// Logs: Setting age to 30


let data = { x: 10 };

let prox = new Proxy(data, {
  get(target, property) {
    console.log(`Accessing ${property}`);
    return target[property];
  }
});

console.log(prox.x); // Logs: Accessing x

