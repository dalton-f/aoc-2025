////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 2 - Gift Shop
// Link: https://adventofcode.com/2025/day/2
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Input contains ranges in format (start-end) seperated by commas in one long line
// Invalid IDs are IDs where some sequence of digits is repeated twice
// Sum of the invalid IDs is the answer
// The goal to solve this is to compare each half of each number in the range (if odd, can be ignored)
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-02/input.txt", "utf-8");

const ranges = text.split(",");

let total = 0;

for (const range of ranges) {
  let [rangeStart, rangeEnd] = range.split("-").map(Number);

  for (let id = rangeStart; id <= rangeEnd; id++) {
    const idString = String(id);

    // Ignore odd numbers as only even-length IDs can be mirrored
    if (idString.length % 2 !== 0) continue;

    // Split the number into halves
    const half = idString.length / 2;
    const leftHalf = idString.slice(0, half);
    const rightHalf = idString.slice(half);

    // If the halves match, the id is invalid
    if (leftHalf === rightHalf) {
      total += id;
      console.log(`${range} has an invalid ID, ${idString}`);
    }
  }
}

console.log(`Adding up all the invalid IDs in this example produces ${total}.`);
