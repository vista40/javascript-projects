// Initialize Variables below
const date = "Monday, 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%"; 
const weatherStatus = "Clear";
const preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <=7) {
    if (fuelLevel === "100%") {
        if (fuelTempCelsius > -300 && fuelTempCelsius < -150) {
            if (totalMassKg <= 850000) {
                if (weatherStatus === "Clear") {
                    console.log("All astronauts are ready.");
                    console.log("Shuttle launch can proceed.");
                }
                
            }
        }
    }
    }
if 
    // add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
