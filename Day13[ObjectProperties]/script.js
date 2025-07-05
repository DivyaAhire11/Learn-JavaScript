
let person = {
    name : "Naman",
    age : 17,
    isStudent : true
}

// console.log(person);
// console.log(person["age"]);
 
// person.city="Ambasan";
person["city"]="Ambasan";
console.log(person)  // change Origanal object

// person.name="Divya Ahire";
// person["name"]="Sayali Ahire";

// person["About"]="Hey! I am Student"

// delete person.About;
// delete person["About"];

// let check= "isStudent" in person;
// if(check){
//     console.log("isStudent is Present")
// }else{
//     console.log("not presnt Sorry");
// }
 
console.log(Object.keys(person))
console.log(Object.values(person));
