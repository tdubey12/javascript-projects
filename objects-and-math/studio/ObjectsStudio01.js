// Code your selectRandomEntry function here:
function selectRandomEntry(idNumbers){
  let randomIndex=Math.round(Math.random()*idNumbers.length);
  return idNumbers[randomIndex];
}
let idNumbers = [291, 414, 503, 599, 796, 890];

let idArray=[];
let id1=selectRandomEntry(idNumbers);

idArray.push(id1);
let id2=selectRandomEntry(idNumbers);
while(idArray.includes(id2)){
  id2=selectRandomEntry(idNumbers); 
}
idArray.push(id2);
let id3=selectRandomEntry(idNumbers);
while(idArray.includes(id3)){
  id3=selectRandomEntry(idNumbers);
}
idArray.push(id3);
// Code your buildCrewArray function here:
function buildCrewArray(candidates,idNumbers){
  let crew=[];
  for(i=0;i<candidates.length;i++){
    for(j=0;j<idNumbers.length;j++){
      if(candidates[i].astronautID==idNumbers[j]){


        crew.push(candidates[i]);
        break;
      }
    }
  }
   return crew;
}


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let selectedCrew=buildCrewArray(animals,idArray);
console.log(`${selectedCrew[0].name}, and ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`);