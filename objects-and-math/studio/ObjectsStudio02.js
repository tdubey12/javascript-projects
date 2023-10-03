// Code your orbitCircumference function here:
function orbitCircumference(r){
  return Math.round(2*Math.PI*r);
}


// Code your missionDuration function here:
function missionDuration(NoOfOrbits,orbitRadius=2000,orbitalSpeed=28000){
  let orbitCir=orbitCircumference(orbitRadius);

  let orbitTime=orbitCir*NoOfOrbits/orbitalSpeed;
  let roundedTime= Math.round(orbitTime*100)/100;
  console.log(`The mission will travel ${orbitCir} km around the planet, and it will take ${roundedTime} hours to complete.`);
  return roundedTime;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers){
  let randomIndex=Math.round(Math.random()*idNumbers.length);
  return idNumbers[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate){
   let duration=missionDuration(3);
   let oxygenUsed=candidate.o2Used(duration);
   oxygenUsed=(Math.round(oxygenUsed)*1000)/1000;
   return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let randomEntry=selectRandomEntry(crew);
 console.log(oxygenExpended(randomEntry));
 