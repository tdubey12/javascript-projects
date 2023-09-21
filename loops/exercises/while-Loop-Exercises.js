//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingfuellevel =0;
let numberofastronautsaboard =0 ; 
let altitudeshuttlereaches =0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require("readline-sync");
startingfuellevel =input.question("Starting fuel level:");

while(startingfuellevel <= 5000 || startingfuellevel >=30000){
  startingfuellevel =input.question("Starting fuel level should be between 5000 and 30000:");
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numberofastronautsaboard =input.question("number of astronauts: ")
while(numberofastronautsaboard>7){
  numberofastronautsaboard =input.question("Number of astronauts should be maximun 7:");
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(startingfuellevel>0){
  altitudeshuttlereaches=altitudeshuttlereaches+50;
  startingfuellevel=startingfuellevel-(100 *numberofastronautsaboard);
}
console.log(altitudeshuttlereaches);
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
console.log(`The shuttle gained an altitude of ${altitudeshuttlereaches})km`);
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if(altitudeshuttlereaches >=2000){
  console.log("Orbit achieved!")
}else
{
  console.log("Failed to reach orbit.");
}