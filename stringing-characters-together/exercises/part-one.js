let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numstr =String(num);
console.log(numstr.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num =123.45;
numstr =String(num);
console.log(numstr.length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if(numstr.indexOf(".")>-1){
    console.log("Number is decimal")
}
else{ 
    console.log("Number is integer");
}