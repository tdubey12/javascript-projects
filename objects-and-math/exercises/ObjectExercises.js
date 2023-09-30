let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}

};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] =Math.floor(Math.random()*10)+1;
salamander["astronautID"]=Math.floor(Math.random()*10)+1;

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander];
// Print out the relevant information about each animal.
console.log(superChimpOne);
console.log(salamander);

// Start an animal race!
function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  let results=fitnessTest(crew);
  console.log(results);