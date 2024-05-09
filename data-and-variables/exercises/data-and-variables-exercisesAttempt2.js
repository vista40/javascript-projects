// Declare and assign the variables below
let shuttleName = "Vista";
let shuttleSpeedMPH = 17500;

let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
let milesToMars = 13972500;
let hoursToMars = milesToMars / shuttleSpeedMPH;
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(daysToMars);

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleSpeedMPH);
console.log(typeof shuttleName);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesToMars);
console.log(typeof daysToMars);
console.log(typeof hoursToMars);

// Calculate a space mission below

// Print the results of the space mission calculations below
let message = (shuttleName + " will take " + daysToMars + " days to reach Mars.");
console.log(message);
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm
console.log(milesToMoon);
let hoursToMoon = milesToMoon / shuttleSpeedMPH
console.log(hoursToMoon);
let daysToMoon = hoursToMoon / 24
console.log(daysToMoon);
// Print the results of the trip to the moon below
message = (shuttleName + " will take " + daysToMoon + " days to reach the moon.");
console.log(message);

