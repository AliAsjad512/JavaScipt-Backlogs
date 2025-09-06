// let PersonC = class {
//   constructor(nm, id) {
//     this.name = nm;
//     this.id = id;
//   }
//   getDetails() {
//     return `${this.name} :: ${this.id}`;
//   }
// };
// let bob = new PersonC("Bob", 123);
// console.log(bob.getDetails());

// let EmployeeC = class extends PersonC {
//   // EmployeeC prototype links to PersonC prototype
//   constructor(nm, id, salary) {
//     super(nm, id);
//     this.salary = salary;
//   }
//   employeeInfo() {
//     //exist on the prototype of EmployeeC
//     return `${this.name} :: ${this.id} :: ${this.salary}`;
//   }
// };
// let noomi = new EmployeeC("Noomi", 456, 8500000);
// console.log(noomi.employeeInfo());


// let PersonP = function(nm,id){
    
//         this.name= nm;
//         this.id =id;
    

// }

// PersonP.prototype.getDetails = function(){
//     return `${this.name} :: ${this.id}`;
// }

// let fred = new PersonP('Ali',511214);

// //console.log(fred.getDetails());

// let EmployeeC = function(nm,id,salary){
//     PersonP.call(this,nm,id);
//     this.salary=salary;

// }


// Object.setPrototypeOf(EmployeeC.prototype,PersonP.prototype)

// EmployeeC.prototype.employeeInfo = function(){
//     return `${this.name} :: ${this.id} :: ${this.salary}`;
// }

// let marry = new EmployeeC('Asjad',541,65000)
// console.log(marry.employeeInfo())