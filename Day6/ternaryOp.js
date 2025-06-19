//CHECK AGE STAGE
let age = 60
let stage = age >= 18 ? "Adult":"Minor";
// console.log("Your Age is:",age,"years");
// console.log("Stage is :",stage);
    

// ODD OR EVEN
let num = -40
let checkOddEven = num % 2 === 0 ? "Even" : "Odd";
// console.log(num ,"is",checkOddEven);



//CHECK POSITIVE OR NEGATIVE
let N = -30
let isPositive = N > 0 ? "positive" : "negative";
// console.log(N ,"is" ,isPositive)


//True or false
let isLoggedIn = false;
let msg = isLoggedIn ? "WelCome" :"Please Log In";
// console.log(msg);



//Truthy or Falsy
let val = "";
let res = val ? "Truthy" : "Falsy";
// console.log(res);


//Multiple Conditions
let score = 80
let grade = score >= 95 ? "A+" :
            score >= 85 ? "A" :
            score >= 70 ? "B" : 
            score >= 35 ? "C" : "fail";
// console.log("score:", score ,"Grade:", grade);



// Toggle Boolean
let toggle = true;
toggle = toggle ? false : true;
// console.log(toggle);