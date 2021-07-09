/* === If Statements Functions === */
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){

    /* == If Statement == */
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1){
        return names[2];
    } else if (strokes == par){
        return names[3];
    } else if (strokes == par + 1){
        return names[4];
    } else if (strokes == par + 2){
        return names[5];
    } else if (strokes >= par + 3){
        return names[6];
    }

    return "change Me";
}

golfScore(10, 4);

console.log(golfScore(5, 8) + "\n");



/* === Switch Statements === */

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "ghamma";
            break;
        case 4:
             answer = "delta";
            break;
        /* === Default Options in Switch Statement === */
        /* If wrong data type is passed */
        default:
            answer = "Invalid input";
            break;
    }
    return answer;
}
/* == Display Answer == */
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4) + "\n");
/* For default Input */
console.log(caseInSwitch("a") + "\n");



/* === Multiple Identical Options in Switch Statements === */
/* Several inputs giving many outputs */
function sequentialSizes(value){
    var answer = "";
    switch(value){
        case 1:
        case 2:
        case 3:
            answer = "Very Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Very High";
            break;
    }
    return answer;
}
/* == Display Answer == */
console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3) + "\n");
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6) +"\n");
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9) +"\n");


/* === Return boolean from function === */
function isLess(a,b){
    return a < b;
}
console.log(isLess(2, 6) + "\n");




/* === Return Early partterns fro Fnctions === */
function abTest(a, b){
    if ( a <= 0 || b <= 0 ){
        return undefined;
    }
    return Math.round( Math.pow( Math.sqrt(a) + Math.sqrt(b), 2 ) );
}
console.log( abTest(-2, 4) );





/* === Card counting === */

var count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
             break;
    }
    var holdbet = 'Hold';
    if (count > 0){
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

console.log(cc(10))
console.log("\n")




/* === JavaScript objects === */
var ourDog = {
    "name": "Kelvin",
    "legs": 4,
    "tails": 1,
    "friends": ["Chebon", "Koech", "Philo"]
};

ourDog['bark'] = "Woof!"
delete ourDog.name;

/* Dot notations To access info in objects */
console.log("Dot Notation");
console.log(ourDog.name);
console.log(ourDog.legs);
console.log(ourDog.tails);
console.log(ourDog.friends[1]);
console.log(ourDog.bark);
console.log("\n");

/* Bracket notations To access info in objects */
console.log("Bracket Notation");
console.log(ourDog["name"]);
console.log(ourDog["legs"]);
console.log(ourDog["tails"]);
console.log(ourDog["friends"][2]);

console.log("\n");

/* == Check If Object Has A property using hasOwnPrperty == */
function checkObj(checkProp){
    if ( ourDog.hasOwnProperty(checkProp) ){
        return ourDog[checkProp];
    } else{
        return "Not Found!";
    }
}

console.log("Checking for Properties in Objects")
console.log(checkObj("legs"));
console.log(checkObj("leg"));
console.log("\n");



/* == Manipulate Complex Objects == */

var myMusic = [
    {
        "artist": "Billi Joel",
        "title": "Piano Man",
        "release_year": 1998,
        "format": ["CD", "8T", "LP"],
        "gold": true
    }, 
    {
        "artist": "Chebon Kibet",
        "title": "Pino Guys",
        "release_year": 2000,
        "format": ["YouTube video"]
    }
];

console.log(myMusic[0].artist);
console.log("\n");


/* === Record collection === */
var collection = {
    "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [ "Let It Rock", "You Give a Bad Name" ]
        },
    "2468": {
            "album": "1998",
            "artist": "Prince",
            "tracks": [ "1998", "Little Red Corvette" ]
        },
    "1245": {
            "artist": "Robert Palmer",
            "tracks": [ "Let", "You Give" ]
    },
    "5439": {
        "album": "ABBA Gold",
    }
};

// Only change code below this line
function updateRecords(id, prop, value){
    if( value === "" ){
        delete collection[id][prop];
    } else if( prop === "tracks" ){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords("5439", "artist", "Chums"));
console.log(updateRecords("5439", "tracks", "I wanna Love"));
console.log(updateRecords("5439", "tracks", "I wanna"));
console.log("\n");


/* === Iterate Using while loop === */
var myArray = [];

var i = 0;
while( i <= 20 ){
    myArray.push(i);
    i++;
}
console.log(myArray + "\n");


/* === Iterate Using For loop === */
var ourArray = [];

for ( var i = 0; i <= 20; i++ ){
    ourArray.push(i);
}

console.log(ourArray + "\n");



/* === Iterate Odd Number Using For loop === */
// += 2


/* === Iterate Using Do while loop === */

var myWhileLoopArray = [];
var whileLoop = 10;

do {
    myWhileLoopArray.push(whileLoop);
    whileLoop++;
} while( whileLoop < 5 )

console.log(whileLoop, myWhileLoopArray);
console.log("\n");


/* ==== ParseInt === */
/* Takes a String returns an integer */
function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("254"));
console.log("\n");

/* === Ternary Operator === */
// Condition ? statement-if-true : statement-if-false
function checkEqual(a, b){
    return a === b ? true : false;
}

console.log(checkEqual(1, 4) + "\n" );



/* === Prevent Object Mutation === */
function freezeObj(){
    "use strict";

    const MATH_CONSTANTS = {
        PI: 3.14/* Pie never changes */
    };


    Object.freeze(MATH_CONSTANTS);

    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI +"\n" );

