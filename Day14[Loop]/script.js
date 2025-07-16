
// let a = 1;
// while(a <= 10){
//     console.log(a , "hello JS");
//     a++;
// }

let colors = ["red", "green", "blue", "purple"];
let index = 0;
while (index < colors.length) {
    console.log(index, colors[index]);
    index++;
}

let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);



let age = 0;
while (age < 1 || age > 120) {
    age = parseInt(prompt("Enter valid age:"));
}


let str = "JavaScript";
let idex = 0;
while (idx < str.length) {
  console.log(str[idx]);
  idx++;
}


let val = 1;
while (val <= 1024) {
  console.log(val);
  val *= 2;
}
