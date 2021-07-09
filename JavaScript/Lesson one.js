
// Comments 
/*
Multiple line comments

*/
console.log("Hello from Chebon");

/* Data Types:
undefined(has not been set), null(nothing), boolean(true false), string(), symbol, number & Object(stor key value pairs)  
*/

// Valiable - store data or label to point to data


var name = "Chebon";// Used throughout your program

let myname = "Kibet";// Used within the scope you declare it

const pi = 3.14;// Your never change it



// Storing value with assign Operator

var a;// Assign
var b = 2;// Assigning and declaring   ("=" sign is the assignment operator)


console.log("Print infor stored in a variable");
console.log(a)// wil print undefined because we have not assigned a to anything
a = 7;
b = a;

console.log(a);


//  Initializing Variable with Assignment operator
var c = 9; 


// Addition
console.log("Multiply of 10 & 10");
var sum = 10 * 10;

console.log(sum);

// Increment

var add = 87;
    add++;

console.log(add)

console.log("Decrement")


// Augmented multiply
var h = 5;
var g = 5;
var i = 5;

/**  === Escape Sequence ===
 *  \' single quote
 * \" double qute
 *  \\ backslash
 * \t tab
 * \n newline
 * \b backspace
 * \r carriage return
 * \f form feed
*/

var mystr = "First line\n\t \\ Second Line\n\tThird Line";


// cocatanting

var concatnate = "My name is one " + "my name is two";
 console.log(concatnate);



 // Find length in string
 var nameoflength = 0;
 var nameof = "Chebon";
 nameoflength = nameof.length;

console.log(nameoflength)

// Bracket notation get a specific string position
var firstletterofname = "";
var firstname = "Chebonkk";

firstletterofname = firstname[2 ];

console.log(firstletterofname)

// Arrays store multiple pieces of data

var array = ["John", 23]

// Nested Array - array inside an array
var nestarray = [["John", 26],["Chebon", 23], [], [], [] ]

var arrayinarray = [ [2,3,4], [5,6,7], [ [8,9,10], [11,12,13] ], [14,15] ]

var mydata = arrayinarray[2][1][0];

console.log(mydata)


// Multiple array with push() fntion
var arraypush = [ 'Stimp', "kk", "cat" ];

arraypush.push (["dog", 3]);

console.log(arraypush)


// Munipulate Array with pop(),    shift() removes first array, unshift()  adds array to the begginning

var poparray = [1,2,3];

var remove = poparray.pop();

console.log(poparray)


// Passing value to functions with arguments

// Example
function ourfunctiowithargs(a, b) {
    console.log( a * b);
}
ourfunctiowithargs( 10, 5 );


//  Global scope - variable seen outside function

var myGlobal = 10;

function fun1() {
    var oopsGlobal = 5;// Var means that oopsglobal will only be inside this funtion only and not seen anywhere else
}

function fun2() {
    var output = "";
    if ( typeof myGlobal != "undefined" ) {
        output += "myGlobal: " + myGlobal;
    }
    if ( typeof oopsGlobal != "undefined" ) {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();


//  Local Scope & Function - only visible within the function



 

// Return a value from a function with return

console.log("\nReturn value fro function with return");
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(90));

function timeFive(numtwo) {
    return numtwo * 5;
}
console.log("\n" + timeFive(5)+ " is the result");



// Understand undefined value retuned from a function

console.log("\n\nUnderstand undefined value retuned from a function");

// Example
/*
var sumdef = 0;
function addThree() {
    sum = sum + 3; 
}
*/

// Assignment with a returned value
var changed = 0;

function change(numa) {
    return (numa + 5) / 3;
}
changed = change(10);









// Stand inline

function nextInLine(arr, item) {
    // Your Code Here
        arr.push(item);
    return arr.shift();
}

var testarr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testarr));
console.log(nextInLine(testarr,6));
console.log("After: " + JSON.stringify(testarr));


// Boolean Values


console.log("\n\n  Boolean");

function welcomeToBoolean() {
    return false;// True or false
}
// If statement conditional

function trueorFalse(wasThatTrue) {
    if ( wasThatTrue ) {
        return "Yes, that was true"
    }
    return "No, That was false";
}

console.log(trueorFalse(false))

// Comparison with equality operator
console.log("\n\n  Comparison with equality operator");

function testequa(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal"
}

console.log(testequa(10));


//  console.log("\n\n  Comparison with strict equality operator");

console.log("\n\n  Comparison with strict equality operator");

function testequat(value) {

    /*
    3 === 3  // == means they wiil be the same but === will ensure the string remains aht it is
    3 === '3'
    */
    if (value === 12) { 
        return "Equal";
    }
    return "Not Equal"
}

console.log(testequat(10));

// Comparison with equality operator
console.log("\n\nComparison with strict equality operator");

function testequal(valueone, valuetwo) {
    if (valueone === valuetwo) { 
        return "Equal";
    }
    return "Not Equal"
}

console.log(testequal(12, "12"));// Strict operator means that the string is not the same as the integer so not eqaul


//   console.log("\n\nComparison with strict inequality operator");
console.log("\n\nComparison with strict inequality operator");

function textntequal(valuek){
    if(valuek != 99){// != This means not equal to 
        return "Not Equal";
    }
    return "Equal";
}
console.log(textntequal(99))

//   console.log("\n\nComparison with strict inequality operator");
console.log("\n\nComparison with strict inequality operator");
function textstrictnotequal(valuestrict){
    if(valuestrict !== 9){// != This means not equal to 
        return "Not Equal";
    }
    return "Equal";
}
console.log(textstrictnotequal(10));


// Comparison with logical and operator
console.log("\n\nComparison with logical and operator: More Operations and perators (>=, <=, >, <  || means or) ");

function testgreater(valuegreate) {
    if(valuegreate > 100 ){
        return "Over 100";
    }
    if(valuegreate > 10 ){
        return "Over 10";
    }
    return "10 or Under"
}

console.log(testgreater(110));