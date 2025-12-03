////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 3 - Lobby
// Link: https://adventofcode.com/2025/day/3
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Input contains lines of numbers
// Each line is a bank of batteries
// Need to turn on two batteries to get the highest joltage
// Solution idea is to find the highest number in the array then find the highest number ordered after it
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-03/input.txt", "utf-8");

const banks = text.split("\n");

let totalJoltage = 0;

for (const bank of banks) {
  let highestIndex = 0;

  let highest = -Infinity;
  let secondHighest = -Infinity;

  // Finds the highest number in the bank that also has a number after it (doesn't check the final digit of the bank)
  for (let i = 0; i < bank.length - 2; i++) {
    if (bank[i] > highest) {
      highest = bank[i];
      highestIndex = i;
    }
  }

  // Starting from the index of the highest number, check for the second highest that comes after it
  for (let i = highestIndex + 1; i < bank.length; i++) {
    if (bank[i] > secondHighest) {
      secondHighest = bank[i];
    }
  }

  let combinedHighest = highest + secondHighest;

  console.log(
    `In ${bank}, you can make the largest joltage possible ${combinedHighest}`
  );

  totalJoltage += parseInt(combinedHighest);
}

console.log(`The total output joltage is ${totalJoltage}.`);
