// launchcode.test.js code:
const launchcode = require('../index.js');
describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("checking organization",()=>{
    expect(launchcode.organization).toBe("nonprofit");
  })
  
  test("checking executive director",()=>{
    expect(launchcode.executiveDirector).toBe("Jeff");
  })
 
  test("checking the value of percentageCoolEmployees",()=>{
    expect(launchcode.percentageCoolEmployees).toBe(100);
  } )
  test("checking the program offered",()=>{
      expect(launchcode.programsOffered[0]).toBe("Web Development");
    }
  )
    test("checking the program offered",()=>{
      expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    }
  ) 
    test("checking the program offered",()=>{
      expect(launchcode.programsOffered[2]).toBe("Liftoff");     
    })
    test("checking the program offered size",()=>{
      expect(launchcode.programsOffered.length).toBe(3);     
    })
  test("checking number divisible by 2",()=>{
     expect(launchcode.launchOutput(4)).toBe('Launch!');
    }
  )
    test("checking number divisible by 3",()=>{
      expect(launchcode.launchOutput(9)).toBe('Code!');
     }    
    )
    test("checking number divisible by 5",()=>{
      expect(launchcode.launchOutput(25)).toBe('Rocks!');
     }    
    )
    test("checking number divisible by 2&&3",()=>{
      expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
     }    
    )
    test("checking number divisible by 3&&5",()=>{
      expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
     }    
    )
    test("checking number divisible by 2&&5",()=>{
      expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
     }    
    )
    test("checking number divisible by 2,3&&5",()=>{
      expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
     }    
    )
    test("checking number not divisible by 2,3&&5",()=>{
      expect(launchcode.launchOutput(17)).toBe("Rutabagas! That doesn't work.");
     }    
    )
  }
  )
