'use strict';

// LECTURE: Functions
// Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'

function describeCountry(country, population, capitalCity) {
    const countr = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return countr;
}

const country1 = describeCountry('India', 1428.6, 'Delhi');
const country2 = describeCountry('U.S.', 334, 'Washington, D.C.');
const country3 = describeCountry('U.K.', 67, 'London');

console.log(country1);
console.log(country2);
console.log(country3);

// LECTURE: Function Declarations vs. Expressions
// The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population 
// represents. For example, China has 1441 million people, so it's about 18.2% of 
// the world population

function percentageOfWorld1(population) {
    return (population * 100) / 7900;
}

const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(334);
const population3 = percentageOfWorld1(67);
console.log(`${population1}
${population2}
${population3}`);

// Create a function expression which does the exact same thing, called 
// 'percentageOfWorld2', and also call it with 3 country populations (can be 
// the same populations)

const percentageOfWorld2 = function (population) {
    return (population * 100) / 7900;
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(334));
console.log(percentageOfWorld2(67));


// LECTURE: Arrow Functions
const percentageOfWorld3 = population => { return (population * 100) / 7900; }
console.log(percentageOfWorld3(334));

// LECTURE: Functions Calling Other Functions

// Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.'

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(2)}% of the world`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('U.S.', 334));
console.log(describePopulation('U.K.', 67));

// Coding Challenge #1
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
const avgDolphin = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);


const checkWinner = (avgDol, avgKoala) => {
    if (avgDol > (2 * avgKoala)) console.log(`Dolphins win (${avgDol} vs ${avgKoala})`);
    else console.log(`Koalas win (${avgKoala} vs ${avgDol})`);
}

checkWinner(avgDolphin, avgKoalas);

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

const populations = [213, 56, 32, 78];
console.log(populations);
const percentages = [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)]
console.log(percentages);

const calcTip = (billValue) => {
    if (billValue >= 50 && billValue <= 300) {
        return .15 * billValue;
    } else {
        return .2 * billValue;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(tips);
console.log(total);

// LECTURE: Basic Array Operations (Methods)

const neighbours = ['Nepal', 'Pakistan', 'China', 'Sri Lanka'];
neighbours.push('Utopia');
neighbours.pop('Utopia');
if (!(neighbours.includes('Germany'))) console.log('Probably not a central Europian Country');

const idx = neighbours.indexOf('Pakistan');
neighbours[idx] = 'India';
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 700000000,
    neighbours: ["Pakistan", "Sri Lanka", "Nepal"]
};

// LECTURE: Dot vs. Bracket Notation

// 1. Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then 
// decrease it by two million using brackets notation

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population = 900000000;
console.log(myCountry);
myCountry['population'] = 700000000;
console.log(myCountry);

// LECTURE: Object Methods

const myCountry1 = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 700000000,
    neighbours: ["Pakistan", "Sri Lanka", "Nepal"],
    describe: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        idIsland: (neighbours.length > 0) ? true : false;
    }
};

console.log(myCountry1.describe());

// Coding Challenge #3

const obj1 = {
    firstName: "Miller",
    lastName: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}

const obj2 = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}


if (obj1.calcBMI() > obj2.calcBMI()) {
    console.log(`${obj1.firstName}'s BMI (${obj1.calcBMI().toFixed(2)}) is higher than ${obj2.firstName}'s(${obj2.calcBMI()})`);
} else {
    console.log(`${obj2.firstName}'s BMI (${obj2.calcBMI().toFixed(2)}) is higher than ${obj1.firstName}'s(${obj1.calcBMI()})`);
}

// LECTURE: Iteration: The for Loop

// for(let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]).toFixed(2));
}
console.log(percentages2);

// LECTURE: The while Loop

const percentages3 = [];
var len = 0;

while(len < percentages.length) {
    percentages3.push(percentages[len]);
    len++;
}
console.log(percentages3);

// Coding Challenge #4

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tipss = [];
const totals = [];

for(let i = 0; i < billss.length; i++) {
    tipss.push(calcTip(billss[i]));
    totals[i] = tipss[i] + billss[i];
}
console.log(tipss);
console.log(totals);