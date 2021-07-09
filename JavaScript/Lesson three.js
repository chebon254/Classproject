/* === Use arrow Functions to write concise Anonymous Functions === 2:47:16 */
/*
var magic = function(){
    return new Date();
};
 */
const magic = () => new Date();
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]) + "\n" );



/* === Higher Order Arrow Functions === */ 
const realNumberArray = [ 4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2 ];

const squareList = (arr) => squaredIntegers = arr.filter( num => Number.isInteger(num) && num > 0 ).map( x => x * x );


console.log(squareList(realNumberArray));
console.log("\n");


const increment = (function(){
    return function increment(number, value = 0) {
        return number + value;
    }
})();

console.log(increment(5, 2));
console.log(increment(5));
console.log("\n");




var testing = (function(){
    return function testing(number, value = 0) {
        return number + value;
    }
})();

console.log(testing(8, 2));
console.log(testing(8));
console.log("\n");


/* === Rest Operator with Function Parameters === */
const sum = (function() {
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);  
    };
})();


console.log(sum(10, 2, 3) + "\n");


/* ==== Destructuring Assigment to Assign Variables from Objects ==== */
// This is to assign = value from objects = to a variable

var vowel = {
    x: 3.6, 
    y: 7.4, 
    z: 6.54
};

/* == Old way == */
var x = vowel.x;
var y = vowel.y;
var z = vowel.z;

/* == Destructuring way == */
const { x: a, y: b, z: c } = vowel;

console.log(b);
console.log("\n");

/* More complex */
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTomorrow(avgTemperature) {
    "use strict";
    const { tomorrow: TempTomorrow }  = avgTemperature;
    return TempTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES));
console.log("\n");





/* === Destructuring Assignment with nested objects === */
const LOCAL_FORECAST = {
    today: {
        min: 72, 
        max: 83
    },
    tomorrow: {
        min: 73.3, 
        max: 84.6
    },
};

function getMaxOfTmrw(forecast) {
    "use dtrict";

    const { tomorrow: { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
console.log("\n");


/* === Destructuring Assignment to assign variables from arrays === */
const [ k, m, , , n ] = [1, 2, 3, 4, 5, 6, 7];
console.log(k, m, n);
console.log("\n");

let e = 8, f = 6;

(() => {
    "use strict";
    [e, f] = [f, e]
})();
console.log(f);
console.log(e);
console.log("\n");


/* === Destructuring Assingment with Rest Operator === */
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    const [ , , , ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);
console.log("\n");

/* === Destructuring Assignment to pass an object as a functions parameter === */
/* == Commonly used with API calls == */
const stats = {
    max: 20,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: 20,
    average: 38.85
};

console.log(stats.min);
console.log("\n");

const half = (function name() {
    return function half({max, min}) {
        return (max + min) / 2.0 ;
    };
})();

console.log(stats);
console.log(half(stats));


/*=== Create Strings using Template Literals ===*/
// You make them with a back tick
const person = {
    name: "Chebon Kibet",
    age: 21
};

//Template Literal with multi-line and String interpolation
const greeting = `Hello, I'm ${person.name}! & I am ${person.age} years old.`;

console.log(greeting);
console.log("\n");

const result = {
    success: ["max_length", "no-amd", "prefer-arrow-functions"],
    failure:["no-var", "var-on-top", "linebreak"],
    skipped:["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
const resultOneDisplayArray = makeList(result.skipped);
const resultTwoDisplayArray = makeList(result.success);

console.log(resultDisplayArray);
console.log("\n");
console.log(resultOneDisplayArray);
console.log("\n");
console.log(resultTwoDisplayArray);
console.log("\n");




/*=== Consice Object Literal Declarations Using simple Literals ===*/
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Chebon Kibet", 21, "Male"));
console.log("\n");

/*=== Consice Declarative Functions ===*/

// Function inside properties
const bicycle = {
    gear: 2,
    setGear(newGear)/* setGear: function(newGear)*/{ 
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
console.log("\n");

/* === USe class Syntax to Define a Constructor Function === */
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

/*== Old Way ==*/
var zeus = new SpaceShuttle('Jupiter');

/*
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

*/

console.log(zeus.targetPlanet);

console.log("\n");


/* ==== Use Getters and Setters To Control Acces to an object ==== */
function makeClass() {
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);/* _ signifies a private varible */
        }

        // Getter
        get temperature(){
            return this.temp;
        }
        // Setter
        set temperature(updateTemp){
            this._temp = updateTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);

let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


