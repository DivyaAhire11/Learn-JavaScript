let input = "";

if (input === "") {
   console.log("No input provided");
}

let hour = 8;

if (hour < 12) {
   console.log("Good morning");
}

let age = 18;
if (age >= 18) {
  console.log(" adult");
} else {
  console.log(" minor");
}

let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}


let name = "Alice";
if (name === "Bob") {
  console.log("Hi Bob!");
} else {
  console.log("You're not Bob.");
}


let score = 72;
if (score >= 90) {
      console.log("Grade: A");
  } else if (score >= 80) {
         console.log("Grade: B");
      } else if (score >= 70) {
             console.log("Grade: C");
          } else if (score >= 60) {
             console.log("Grade: D");
            } else {
                console.log("Grade: F");
}


let temperature = 35;
if (temperature > 40) {
  console.log("Too hot!");
} else if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}
