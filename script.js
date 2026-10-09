// conditional statements in JavaScript
/*
const userAccount = "logged in";
const userEmail = "verified";
if (userAccount === "logged in" && userEmail === "verified"){
    console.log("Access Granted");
}else{
    console.log("Access Denied")
}*/
// JavaScript Functions

function birthYear(leap) {
    return `${leap} was my year of birth`
}
const actualBirthYear = birthYear(2002);
console.log(actualBirthYear);
// Function Expression
// Write a function expression called calculateSalary that:

// Takes 2 parameters — hourly rate and hours worked
// Returns the total salary
// Call the function with a rate of ₦2000 and 40 hours
// Log the result using a template literal
const calculateSalary = function (rate, workhour) {
    const totalSalary = rate * workhour
    return totalSalary;
}
const result = calculateSalary(2000, 40)
console.log(`Total Salary is ${result}`);

// Test question on JavaScript function
const calcAverage = (lap1, lap2, lap3) => (lap1 + lap2 + lap3) / 3
const avgSharks = calcAverage(25.0, 24.0, 24.5);
const avgEagles = calcAverage(27.5, 26.0, 27.5);
function checkRaceWinner(avgSharks, avgEagles) {
    if (avgEagles - avgSharks >= 2) {
        return `Sharks win (${avgSharks} vs. ${avgEagles})`;
    } else if (avgSharks - avgEagles >= 2) {
        return `Eagles win (${avgEagles} vs. ${avgSharks})`;
    } else
        return `Too close to call...`;
}
console.log(checkRaceWinner(avgSharks, avgEagles));
// question two

// Udemy Course refresh on Functions
function agapeLove(good, bad){
const jonny = `John said he is on ${good} terms with Lola but in ${bad} terms with Mirabel`
return jonny
}
// const jonny will output undefined because it is not a global variable
const johnMood = agapeLove("talking", "decent");
console.log(johnMood);
// Function Declaration
console.log(caller());
function caller() {
    return `My name is John`;
}
// Array
// const myArray = ["John", "Lola", "Mirabel", "Tobi"];
// console.log(myArray[0]);
//console.log(myArray);
// console.log(myArray[myArray.length - 1]);
// const newArray = myArray.push("Jude");
// console.log(newArray);

// Practicing for loop
const myArray = [
    "John", 
    "Owolabi", 
    2026-2000,
    "Backend Developer"
    ["John", "Lola", "Mirabel", "Tobi"],
    true
];
myArray.push('Nimi')
for( i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}
