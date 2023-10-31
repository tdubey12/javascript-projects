// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    init();
  });
  function init () {
    const button = document.getElementById("takeoff");
    const flightstatuspara=document.getElementById("flightStatus");
    const shuttleBackground=document.getElementById("shuttleBackground");
    const spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    const landing=document.getElementById("landing");
    const missionAbort=document.getElementById("missionAbort");
    const up=document.getElementById("up");
    const down=document.getElementById("down");
    const right=document.getElementById("right");
    const left=document.getElementById("left");
    const rocket=document.getElementById("rocket");
    let rocketTopMargin= rocket.style.marginTop;
    let rocketLeftMargin = rocket.style.marginLeft;


     
     
     button.addEventListener('click', event => {
        let ready=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready){
            flightstatuspara.innerHTML ="Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML="10000";
        }
     });
     landing.addEventListener('click' , event => {
        /*
        A window alert should let the user know “The shuttle is landing. Landing gear engaged.”
        The flight status should change to “The shuttle has landed.”
        The background color of the shuttle flight screen should change from blue to green.
        The shuttle height should go down to 0.
        */
       window.alert('The shuttle is landing. Landing gear engaged.');
       flightstatuspara.innerHTML="The shuttle has landed.";
       shuttleBackground.style.backgroundColor = "green";
       spaceShuttleHeight.innerHTML="0";
     });
     missionAbort.addEventListener("click", event =>{
        /*
        A window confirm should let the user know “Confirm that you want to abort the mission.” If the user wants to abort the mission, then add parts b-d.
        The flight status should change to “Mission aborted.”
        The background color of the shuttle flight screen should change from blue to green.
        The shuttle height should go to 0.
        */
       let abort=window.confirm("Confirm that you want to abort the mission.");
       if(abort){
        flightstatuspara.innerHTML ="Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML="0";
       }
        
     });
     up.addEventListener("click" , event =>{
        console.log("top margin" + rocketTopMargin)
        rocket.style.marginTop = rocketTopMargin + 10;
     })
     down.addEventListener("click" , event =>{
        console.log("top margin" + rocketTopMargin)

        rocket.style.marginTop = rocketTopMargin - 10;

     })
     right.addEventListener("click" , event =>{

     })
     left.addEventListener("click" , event =>{

     })
     
}
 

  