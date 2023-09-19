const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newstr =str.slice(0,3);
newstr =str.concat(newstr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string ${str} Modified string ${newstr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput =input.question("enter the number of letters that will be relocated:");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userInput >str.length){
    newstr =str.slice(0,3);
newstr =str.concat(newstr);
console.log(`Original string ${str} Modified string ${newstr} userInput is longer than string length ${str.length}`);

}
else{
    newstr =str.slice(0,userInput);
    newstr =str.concat(newstr);
    console.log(`Original string ${str} Modified string ${newstr}` );
}