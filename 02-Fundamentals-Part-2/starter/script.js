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
console.log(describePopulation('U.S.',334));
console.log(describePopulation('U.K.',67));

// Coding Challenge #1
const calcAverage = (s1,s2,s3) => {
    return (s1+s2+s3)/3;
}
const avgOfBothTeam = function (p1,p2,p3,p4,p5,p6) {
    const avgDolphin = calcAverage(p1,p2,p3);
    const avgKoalas = calcAverage(p4,p5,p6);
    checkWinner(avgDolphin,avgKoalas);
    return (avgDolphin + avgKoalas)/2;
}

const checkWinner = (avgDol, avgKoala) => {
    if(avgDol > (2 * avgKoala)) console.log(`Dolphins win (${avgDol} vs ${avgKoala})`);
    else console.log(`Koalas win (${avgKoala} vs ${avgDol})`);
}