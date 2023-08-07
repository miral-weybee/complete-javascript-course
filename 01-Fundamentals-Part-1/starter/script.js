// alert("Welcome to js");
// console.log(35+36+46);

// LECTURE: Values and Variables

let country = 'India';
let continent = 'Asia';
let population = 8000000000

console.log('Country:' + country);
console.log('Continent:' + continent);
console.log('Population:' + population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log('Type of isIsland:' + typeof (isIsland));
console.log('Type of population:' + typeof (population));
console.log('Type of country:' + typeof (country));
console.log('Type of language:' + typeof (language));

// LECTURE: let, const and var
language = 'gujarati';
const PI = 3.14

// LECTURE: Basic Operators

// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half

population = population / 2;
console.log("Country population :" + population);

// 2. Increase the population of your country by 1 and log the result to the console
population += 1;
console.log("Country population after incrementing by one:" + population);

// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
let finlandPupulation = 6000000;
console.log((population > finlandPupulation) ? "Yes" : "No");

// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country
console.log("Average Population in mn:" + population / 33000000);

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese'

let description = "Portugal is in Europe, and its 11 million people speak portuguese";

//Coding challenge 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// let markMass = 78;
// let markHight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass/(markHight**2);
// let johnBMI = johnMass/(johnHeight**2);
// console.log(markBMI +" " +johnBMI);

// let markHigherBMI = console.log(markBMI > johnBMI);


//LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

description = `'Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)

if (population > 33000000) {
    console.log("'Portugal's population is above average");
} else {
    console.log("Portugal's population is 22 million below average");
}

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


let markMass = 78;
let markHight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);
console.log(markBMI + " " + johnBMI);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}!)`);

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5'; 
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2




////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

const dolphinAvg = (96 + 108 + 89) / 3;
const koalaAvg = (109 + 95 + 123) / 3;
console.log(`${dolphinAvg} and ${koalaAvg}`);
if (dolphinAvg > koalaAvg) {
    console.log("Dolphin is winer");
} else if (dolphinAvg === koalaAvg) {
    console.log("Match is tie");
} else {
    console.log("Koala is winner");
}



// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// prompt('How many neighbour countries does your country have?');

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
// == for now)
// if(numNeighbours == 1) console.log('Only 1 border!');

// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1

// else if(numNeighbours > 1) console.log("More than 1 border");

// 4. Use an else block to log 'No borders' (this block will be executed when 
//     'numNeighbours' is 0 or any other value)

// else console.log("No borders");

// LECTURE: Logical Operators

if ((language === "English") && (population < 50000000) && (!isIsland)) console.log("'You should live in Portugal :)");
else console.log("Portugal does not meet your criteria :(");

// LECTURE: The switch Statement

switch (language) {
    case 'chinese or mandarin':
        console.log("MOST number of native speakers!");
        break;

    case 'spanish':
        console.log("2nd place in number of native speakers'");
        break;

    case 'english':
        console.log("3rd place");
        break;

    case 'hindi':
        console.log("Number 4");
        break;

    case 'arabic':
        console.log("5th most spoken language");
        break;


    default:
        console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator

population > 33000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this.
It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

let bill = 275;
let tip;
(bill >= 50 && bill <= 300) ? tip = bill * (15 / 100) : tip = bill * (20 / 100); 

console.log(`Bill is ${bill}, tip was ${tip}, and the total is ${bill + tip}`);