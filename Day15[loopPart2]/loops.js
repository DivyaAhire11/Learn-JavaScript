//find odd number
// for(i=0;i<21;i++){
//     if(i%2){
//         console.log(i)
//     }
// }


// Use a for loop to count vowels in a string like "javascript"
let str = "javascript", count = 0;
for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        count++;
        console.log(x);
    }
}
console.log("total vowels is : ", count);


// Use a for loop to reverse the characters in a string
// let Name = "Manas"
// for (let x = Name.length; x >= 0; x--) {
//     console.log(Name[x]);
// }

