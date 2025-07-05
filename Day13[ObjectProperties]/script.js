
let person = {
    name : "Naman",
    age : 17,
    isStudent : true
}

// console.log(person);
// console.log(person["age"]);
 

//ADD NEW KEW:VALUE

// person.city="Ambasan";
// person["city"]="Ambasan";
// console.log(person)  // change Origanal object


// CHANGE VALUE

// person.name="Divya Ahire";
// person["name"]="Sayali Ahire";

// person["About"]="Hey! I am Student"


// DELETE KEY-VALUE

// delete person.About;
// delete person["About"];


//CHECK KEY PRESEND IN OBJECT

// let check= "isStudent" in person;
// if(check){
//     console.log("isStudent is Present")
// }else{
//     console.log("not presnt Sorry");
// }
 

// DISPLAY ALL KEYS

// console.log(Object.keys(person));


//DISPLAY ALL VALUE

// console.log(Object.values(person));


//DISPLAY ALL KEYS-VALUES(ENTRIES)
// console.log(Object.entries(person));


let Mobile ={
    name : "OPPO",
    price : 13000,
    color : "purple"
}

Mobile.isHaveCharger=false;  // add 
console.log(Mobile)

let ObjectValues = Object.values(Mobile);
// console.log(ObjectValues);  

Mobile.brand = "OPPO"
Mobile.is5G = true
 
delete Mobile.brand;


