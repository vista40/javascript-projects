let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
  };
  
  
  let dogBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
  };
  
  
  let tartiGrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: "0.0000000001",
   age: 1
  };
  
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
superChimpTwo["astronautID"] = 2;
salamander["astronautID"] = 3;
dogBeagle["astronautID"] = 4
tartiGrade["astronautID"] = 5;

// Add a move method to each animal object


superChimpOne["move"] = function () {
   return Math.floor(Math.random()*11);
}
superChimpTwo["move"] = function () {
   return Math.floor(Math.random()*11);
}
salamander["move"] = function () {
   return Math.floor(Math.random()*11);
}
dogBeagle["move"] = function () {
   return Math.floor(Math.random()*11);
}
tartiGrade["move"] = function () {
   return Math.floor(Math.random()*11);
}
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dogBeagle, tartiGrade];

// Print out the relevant information about each animal.
function crewReports(crew) {
   for (let i = 0; i < crew.length; i++) {
   console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} year(s) old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }
}
crewReports(crew);

// Start an animal race!
 function fitnessTest(array) { 
   results = [", "];
   for (let i = 0; i < array.length; i++) {
   steps = 0;
   turns = 0;
    while (steps < 20) {
      steps += array[i].move();
      turns += 1; 
      }
      results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
      }
      return results; 
   }
 
fitnessTest(crew);
console.log(results);



