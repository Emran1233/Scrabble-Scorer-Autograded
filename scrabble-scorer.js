//const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = ""; for (let i = 0; i < word.length; i++) {
      for (const pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }
      }
   }
   return letterPoints;
}// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected.
function initialPrompt() {
   console.log("Let's play some scrabble!");
   //let intro = input.question('Enter a word to score:');
   let intro = "Zebra"
   return intro;
}
let simpleScorer = function (word) {
   return word.length;
};
let vowelBonusScorer = function (word) {
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   let score = 0;
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         score += 3;
      } else {
         score += 1;
      }
   }
   return score;
}
let scrabbleScorer = function (word) {
   let score = 0;
   word = word.toLowerCase();
   for (let i = 0; i < word.length; i++) {
      for (const item in newPointStructure) {
         if (item === word[i]) {
            score += Number(newPointStructure[item]);
         }
      }
   }
   return score;
};
const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point",
      scoreFunction: simpleScorer
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts. Consonants are 1 pt.",
      scoreFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditinal scoring algorithm",
      scoreFunction: scrabbleScorer
   }
];
function scorerPrompt() {
   console.log("\nWhich of the scoring algorithms would you like to use?")
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
   }
   let scoreQuestion = 2;
   //let scoreQuestion = Number(input.question(`\nEnter 0, 1, or 2: `));
   return scoringAlgorithms[scoreQuestion]
}
function transform(oldPointStructure) {
   // Loops through each array inside oldPointStructure
   let newPtObject = {}; // empty array
   for (let key in oldPointStructure) {
      for (let i = 0; i < oldPointStructure[key].length; i++) {
         newPtObject[oldPointStructure[key][i].toLowerCase()] = Number(key);
      }
   }
   return newPtObject;
};
let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);
function runProgram() {
   let word = initialPrompt();
   let scoreGame = scorerPrompt();
   console.log(`Score for ${word} : ${scoreGame.scoreFunction(word)}`);
   // console.log(scorerPrompt());
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
}















