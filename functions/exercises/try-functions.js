function makeLine(size,char="#"){
    let line ="";
    for(let i=0;i<size;i++){
        line = line+char;
    }
    return line;
}

function makeSquare(size){
    let square="";

    /*for(let i=0;i<size;i++){
        let line="";
        for(let j=0;j<size;j++){
            line=line+"#";
        }
        square=square+line+"\n";
    }*/
    for(let i=0;i<size;i++){
        square=square+makeLine(size)+"\n";
    }
    return square;
}
function makeRectangle(height,width){
    let rectangle ="";
   /* for(let i=0;i<height;i++){
        let line="";
        for(let j=0;j<width;j++){
            line=line+"#";
        }
        rectangle=rectangle+line+"\n";
    }*/
    for (let i=0;i<height;i++){
        rectangle=rectangle+makeLine(width)+"\n";
    }
    return rectangle;
}
function makeDownwardsStairs(height){
    let stairs="";
    for(let i=1;i<=height;i++){
        stairs=stairs+makeLine(i)+"\n"
    }
    return stairs;
}
function makeSpaces(size){
    let line ="";
    for(let i=0;i<size;i++){
        line = line+" ";
    }
    return line;   
}
function makeSpaceLine(numSpaces,numChars){
    let spaceline =makeSpaces(numSpaces)+makeLine(numChars)+makeSpaces(numSpaces);
    return spaceline;
}

function makeIsoscelesTriangle(height){
    let triangle ="";
    for(i=1;i<=height;i++){
        let row =makeSpaceLine(height-i,2*i-1);
        triangle=triangle+row+"\n";
    }
    return triangle.slice(0,-1);
}
function makeDiamond(height){
    let diamond ="";
    let triangle =makeIsoscelesTriangle(height);
    let reverseTriangle=triangle.split("\n").reverse().join("\n");
    diamond=triangle+"\n"+reverseTriangle;
    return diamond;
}
console.log("line");
console.log(makeLine(5));
console.log("square");
console.log(makeSquare(5));
console.log("rectangle");
console.log(makeRectangle(2,4));
console.log("stairs");
console.log(makeDownwardsStairs(5));
console.log("spaceline");
console.log(makeSpaceLine(2,1));
console.log("Isoceles triangle");
console.log(makeIsoscelesTriangle(3));
console.log("diamond");
console.log(makeDiamond(5));
console.log("starline");
console.log(makeLine(5,"*"));