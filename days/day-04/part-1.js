////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 4 - Printing Department
// Link: https://adventofcode.com/2025/day/4
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Simple check all adjacent digits in a 2D array
// Count if < 4 rolls of paper @ any adjacent slots
// Add to total
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-04/input.txt", "utf-8");

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const diagram = text.split("\n").map((row) => row.trim().split(""));

let accessibleRollsOfPaper = 0;

// Loop over the whole 2D grid
for (let row = 0; row < diagram.length; row++) {
  for (let col = 0; col < diagram[row].length; col++) {
    const value = diagram[row][col];
    let neighbors = [];

    // Find each neighbor in each direction for each element in the grid
    for (const [dx, dy] of directions) {
      const r = row + dx;
      const c = col + dy;

      if (r >= 0 && r < diagram.length && c >= 0 && c < diagram[0].length)
        neighbors.push(diagram[r][c]);
    }

    // Check the neighbors for amount of adjacent @ symbols
    const adjacentRollsOfPaper = neighbors.filter((n) => n === "@").length;

    console.log(
      `Value ${value} at [${row},${col}] has neighbors [${neighbors}] with ${adjacentRollsOfPaper} adjacent rolls of paper`
    );

    // If less than 4, increase the total
    if (value === "@" && adjacentRollsOfPaper < 4) accessibleRollsOfPaper++;
  }
}

console.log(
  `There are ${accessibleRollsOfPaper} rolls of paper that can be accessed by a forklift`
);
