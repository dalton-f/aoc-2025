////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 6 - Cafeteria
// Link: https://adventofcode.com/2025/day/6
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Should be able to seperate the arrays by columns and do some funky looping to find the total
// Second part should be simple, fix the input formatting, rework the loop to go backwards, then find the digits
// This part 2 solution should work if I could maintain the pre-existing leading spaces when splitting the text
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-06/input.txt", "utf-8");

const lines = text
  .split("\n")
  .map((line) => line.split(" ").filter((n) => n.trim()));

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let operators = ["*", "-", "+", "-"];

let total = 0;

let problemNumber = 0;

// Loop over every problem
for (let i = lines[0].length - 1; i >= 0; i--) {
  let numbers = [];
  let cephalopodNumbers = [];
  let operator;
  let result;

  // Find each part of the problem in the columns
  for (const line of lines) {
    const part = line[i];

    if (!operators.includes(part)) numbers.push(part);
    else operator = part;
  }

  let maxDigits = Math.max(...numbers.map((number) => number.length));

  for (let i = 0; i < maxDigits; i++) {
    let cephalopodNumber = "";

    // Reconstruct the cephalopod number by checking each digit of the actual numbers from the input
    for (const num of numbers) {
      if (num[i]) cephalopodNumber += num[i];
    }

    cephalopodNumbers.push(cephalopodNumber);
  }

  // Covert to actual numbers, removed any suspicious blank strings
  cephalopodNumbers = cephalopodNumbers.filter((num) => num.trim()).map(Number);

  console.log(cephalopodNumbers);

  console.log("---------");

  // Complete the calculation
  result = cephalopodNumbers.reduce(operations[operator]);

  total += result;
}

console.log(`In this worksheet, the grand total is ${total}.`);
