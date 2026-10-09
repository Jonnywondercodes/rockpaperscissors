// Practicing loops (sweet loops for real)

const years = [1965, 2001, 1980, 1997, 1950, 2003];
const age = [];
const currentYear = new Date().getFullYear();

for(let i = years.length - 1; i >= 0; i--){
age.push(currentYear - years[i])
}
console.log(age);

// Nested loops
for (let exercise = 1; exercise < 4; exercise++){
console.log(`-----Starting Exercise ${exercise}-----`);

for(let rep = 1; rep < 6; rep++){
console.log(`Exercise ${exercise}: I did rep ${rep}`)
}
}