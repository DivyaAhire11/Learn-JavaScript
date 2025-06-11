//PRIMITIVE

let name= "Naman"     //string

let age=25      //Number   

let isStudent = true;   //Boolean

let x;  //undefined

let y = null;   //Null

//NON-PRIMITIVE

let person={         //Object
    Name : "Vilas",
    mob_no : 123456789,
    age: 50
}

let No = [1,2,4,6,65,2,8978];     //Array

let fruits = ["apple","mango","banana","orange"];   //Array

let obj1={      //object
    greeting: "Hello",
    name : "Denial"
};
let obj2 = obj1;
console.log(obj2.greeting);
//Hello
obj2.greeting = "Good day"
console.log(obj1.greeting)
//Good day

function saySomething(){   //function
    console.log("Hey! What's up.")
}
saySomething();// Hey! What's up.


