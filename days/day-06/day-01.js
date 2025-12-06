////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 6 - Cafeteria
// Link: https://adventofcode.com/2025/day/6
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Should be able to seperate the arrays by columns and do some funky looping to find the total
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
for (let i = problemNumber; i < lines[0].length; i++) {
  let numbers = [];
  let operator;
  let result;

  // Find each part of the problem in the columns
  for (const line of lines) {
    const part = line[i];
    if (!operators.includes(part)) numbers.push(parseInt(part));
    else operator = part;
  }

  // Complete the calculation
  result = numbers.reduce(operations[operator]);

  total += result;
}

console.log(`In this worksheet, the grand total is ${total}.`);
