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
// For part 2, any id with any repeated sequence of digits that is repeated at least twice is invalid
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-02/input.txt", "utf-8");

const ranges = text.split(",");

let total = 0;

function isInvalid(number) {
  const idString = String(number);

  // Try splitting the string into `repeatCount` equal blocks - checks substrings of 2, then 3 etc.
  for (let repeatCount = 2; repeatCount <= idString.length; repeatCount++) {
    // Only possible if the string length divides evenly
    if (idString.length % repeatCount === 0) {
      const blockSize = idString.length / repeatCount;
      const firstBlock = idString.slice(0, blockSize);
      let isRepeatedPattern = true;

      // Check that every block matches the first block
      for (let index = 0; index < idString.length; index += blockSize) {
        const currentBlock = idString.slice(index, index + blockSize);

        if (currentBlock !== firstBlock) {
          isRepeatedPattern = false;
          break;
        }
      }

      // If all blocks match, this is a repeated pattern
      if (isRepeatedPattern) {
        return true;
      }
    }
  }

  return false;
}

for (const range of ranges) {
  let [rangeStart, rangeEnd] = range.split("-").map(Number);

  for (let id = rangeStart; id <= rangeEnd; id++) {
    if (isInvalid(id)) {
      total += id;
      console.log(`${range} has an invalid ID, ${id}`);
    }
  }
}

console.log(`Adding up all the invalid IDs in this example produces ${total}.`);
