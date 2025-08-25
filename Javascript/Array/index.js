
const teas=["Ali","Asjad","Abbas"]


teas.push("Haider");

const index = teas.indexOf("Ali");
if(index > -1){
    teas.splice(index,1);
}

const caffinatedTeas =teas.filter((name) => name !== "Abbas" );
console.log(caffinatedTeas);


console.log(teas.sort());



