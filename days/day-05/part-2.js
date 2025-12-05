////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 5 - Cafeteria
// Link: https://adventofcode.com/2025/day/5
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Basically just seperate the input and build an array of "fresh numbers"
// Initial solution doesn't work because the numbers are too big so the set length gets maxed out
// Instead we will run through a nested loop and just check each range if each id >= min and <= max
// If my initial part 1 solution would work, I could use that code to just build a full set to get the total count of fresh ingredient ideas
// Instead we can just loop and add the diff from min and max to total.. except some ranges overlap, and these get counted double.
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-05/input.txt", "utf-8");

let [freshIngredientRanges, ingredientIDs] = text
  .trim()
  .split(/\n\s*\n/)
  .map((data) => data.split("\n"));

let total = 0;

let mergedRanges = [];

freshIngredientRanges = freshIngredientRanges
  .map((r) => r.split("-").map(Number))
  .sort((a, b) => a[0] - b[0]);

let [curMin, curMax] = freshIngredientRanges[0];

for (let i = 1; i < freshIngredientRanges.length; i++) {
  const [min, max] = freshIngredientRanges[i];

  if (min <= curMax + 1) {
    // Overlapping or touching → extend current range
    curMax = Math.max(curMax, max);
  } else {
    mergedRanges.push([curMin, curMax]);
    curMin = min;
    curMax = max;
  }
}

mergedRanges.push([curMin, curMax]);

for (const [min, max] of mergedRanges) total += max - min + 1;

console.log(
  `In this example, the fresh ingredient ID ranges consider a total of ${total} ingredient IDs to be fresh.`
);
