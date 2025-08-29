// 🔹 6. Object.keys(obj).map(...)

let grouped = Object.entries(courses).reduce((acc, [id, value]) => {
  let group = value.creditHours > 3 ? "ok" : "low";
  if (!acc[group]) acc[group] = [];
  acc[group].push(value);
  return acc;
}, {});


// 🔹 4. Object.entries(obj).forEach(...)
let titles = Object.keys(courses).map(key => courses[key].title);
console.log(titles);


// 🔹 5. for...of with Object.entries

for (let [key, value] of Object.entries(courses)) {
  console.log(key, value.creditHours);
}


// 🔹 4. Object.entries(obj).forEach(...)

// Loops over [key, value] pairs. (Most common ✅)
Object.entries(courses).forEach(([key, value]) => {
  console.log(key, value.title);
});


// 🔹 3. Object.values(obj).forEach(...)

Object.values(courses).forEach(value => {
  console.log(value.title, value.creditHours);
});


// 🔹 2. Object.keys(obj).forEach(...)
Object.keys(courses).forEach(key => {
  console.log(key, courses[key]);
});


// 🔹 1. for...in loop (classic way)

// Loops over enumerable keys in an object.

for (let key in courses) {
  console.log(key, courses[key]);
}
