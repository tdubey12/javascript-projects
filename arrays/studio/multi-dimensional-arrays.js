let input =require("readline-sync");
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodarray =food.split(",");
let equipmentarray =equipment.split(",");
let petsarray = pets.split(",");
let sleepAidsarray =sleepAids.split(",");
foodarray.sort();
equipmentarray.sort();
petsarray.sort();
sleepAidsarray.sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold =[];
cargoHold.push(foodarray);
cargoHold.push(equipmentarray);
cargoHold.push(petsarray);
cargoHold.push(sleepAidsarray);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNo =input.question("select a cabinet");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cabinetNo>=0 && cabinetNo<=3){
console.log(`selected cabinet ${cargoHold[cabinetNo]}`);
}else{
    console.log("user entered an invalid number");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabinetNo =input.question("cabinetNo");
let item = input.question("particular item");
if (cargoHold[cabinetNo].includes(item)){
    console.log(`Cabinet ${cargoHold[cabinetNo]} DOES contain ${item}`);
}else{
    console.log(`Cabinet ${cargoHold[cabinetNo]} DOES not contain ${item}`);
}