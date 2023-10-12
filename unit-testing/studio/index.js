
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput:function(numberparam){
        if(numberparam %2 ==0 && numberparam %5==0 && numberparam %3==0){
            return 'LaunchCode Rocks!';
        
        } else if(numberparam %2==0  && numberparam %5==0){
            return 'Launch Rocks! (CRASH!!!!)';
        } else if(numberparam %3==0  && numberparam %5==0){
            return 'Code Rocks!';
        } else if(numberparam %2 ==0 && numberparam %3==0){
            return 'LaunchCode!';            
        } else if(numberparam %2==0){
            return 'Launch!';
        } else if(numberparam %3==0){
            return 'Code!';
        } else if(numberparam %5==0){
            return 'Rocks!';
        
        } else if(numberparam %2 !=0 && numberparam %5!=0 && numberparam %3!=0){
            return "Rutabagas! That doesn't work.";
           
        }

    }
}


module.exports = launchcode;

