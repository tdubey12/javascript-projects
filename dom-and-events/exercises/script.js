function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor ="red";
     });
     missionAbort.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor ="";
     });
    missionAbort.addEventListener('click', event => {
        let abort=window.confirm("Are you sure you want to abort the mission?");
        if (abort){
            paragraph.innerHTML ="Mission aborted! Space shuttle returning home";
        }
     });
     
}

window.addEventListener("load", init);
