////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 4 - Printing Department
// Link: https://adventofcode.com/2025/day/4
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Simple check all adjacent digits in a 2D array
// Count if < 4 rolls of paper @ any adjacent slots
// Add to total
// Part 2 is similar just needs an iterative approach to a changing grid
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

let diagram = text.split("\n").map((row) => row.trim().split(""));

const countAdjacentPaperRolls = (grid, row, col) => {
  let count = 0;

  for (const [dx, dy] of directions) {
    const r = row + dx;
    const c = col + dy;

    if (
      r >= 0 &&
      r < grid.length &&
      c >= 0 &&
      c < grid[0].length &&
      grid[r][c] === "@"
    ) {
      count++;
    }
  }

  return count;
};

let totalRemoved = 0;
let cycle = 1;

// Continue to check the full grid
while (true) {
  console.log(`\n==========================`);
  console.log(`Starting cycle ${cycle}`);
  console.log(`==========================\n`);

  const toRemove = [];

  // Find all removable '@' by looping through the whole grid - identical to part 1 but with a utilty function
  for (let r = 0; r < diagram.length; r++) {
    for (let c = 0; c < diagram[r].length; c++) {
      if (diagram[r][c] === "@" && countAdjacentPaperRolls(diagram, r, c) < 4) {
        toRemove.push([r, c]);
      }
    }
  }

  // Stop if no more can be removed
  if (toRemove.length === 0) break;

  console.log(`\nRemoving ${toRemove.length} rolls this cycle:`);

  // Remove them all (simultaneously) editing the grid to be looped back over
  for (const [r, c] of toRemove) {
    console.log(` --> Removing roll at [${r},${c}]`);

    diagram[r][c] = ".";
  }

  console.log("\nGrid after removal:");
  console.log(diagram.map((r) => r.join("")).join("\n"));

  totalRemoved += toRemove.length;

  cycle++;
}

console.log(`\n====================================`);
console.log(`Total rolls removed: ${totalRemoved}`);
console.log(`====================================\n`);
