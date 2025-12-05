////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 5 - Cafeteria
// Link: https://adventofcode.com/2025/day/5
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Basically just seperate the input and build an array of "fresh numbers"
// Initial solution doesn't work because the numbers are too big so the set length gets maxed out
// Instead we will run through a nested loop and just check each range if each id >= min and <= max
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-05/input.txt", "utf-8");

// const [freshIngredientRanges, ingredientIDs] = text
//   .trim()
//   .split(/\n\s*\n/)
//   .map((data) => data.split("\n"));

// let total = 0;

// let freshIngredientIDs = new Set();

// for (const range of freshIngredientRanges) {
//   const [min, max] = range.split("-").map(Number);

//   // Build a full array of fresh ids
//   for (let i = min; i <= max; i++) {
//     freshIngredientIDs.add(i);
//   }
// }

// // Check all the ids against the built array of fresh ids
// for (const id of ingredientIDs) {
//   if (freshIngredientIDs.has(parseInt(id))) {
//     console.log(`Ingredient ID ${id} is fresh because it falls into a range.`);
//     total++;
//   } else {
//     console.log(
//       `Ingredient ID ${id} is spoiled because it does not fall into any range.`
//     );
//   }
// }

// console.log(
//   `In this example, ${total} of the available ingredient IDs are fresh`
// );

const [freshIngredientRanges, ingredientIDs] = text
  .trim()
  .split(/\n\s*\n/)
  .map((data) => data.split("\n"));

let total = 0;

for (const id of ingredientIDs) {
  for (const range of freshIngredientRanges) {
    const [min, max] = range.split("-").map(Number);

    if (id >= min && id <= max) {
      console.log(
        `Ingredient ID ${id} is fresh because it falls into range ${min}-${max}.`
      );

      total++;

      break;
    }
  }
}

console.log(
  `In this example, ${total} of the available ingredient IDs are fresh`
);
