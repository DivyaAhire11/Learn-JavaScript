// let marks = parseInt(prompt("Enter Your Marks"));
// let grade;

//USING IF-ELSE STATEMENTS
// if(marks >= 90){
//     grade = "A";

// }else if(marks >= 75){ 
//     grade = "B"
//
//  }else if(marks >= 65){
//     grade = "C";
// 
// }else if(marks >= 35){
//     grade = "D"
// 
// }else{
//     grade = "FAIL";
// }

// console.log("grade is:",grade);
 

//USING SWITCH STATEMENT

// switch(true){
//     case (marks >= 90): grade="A";
//                        break;
//     case (marks >= 75): grade="B";
//                         break;
//     case (marks >= 65): grade="C";
//                         break;
//     case (marks >= 35): grade="D";
//                         break;
//     default: grade =" You are FAil";
// }
// console.log(`marks: ${marks} , Grade:${grade}`);


let day=3;
let dayName;
switch(day){
    case 1: 
            dayName = "Monday";
            break;
     case 2: 
            dayName = "Tuesday";
            break;
     case 3: 
            dayName = "Wednesday";
            break;
     case 4: 
            dayName = "Thursday";
            break;
     case 5: 
            dayName = "Friday";
            break;
     case 6: 
            dayName = "saturday";
            break;
     case 7: 
            dayName = "Sunday";
            break;
}
console.log(dayName);