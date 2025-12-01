////////////////////////////////////////////////////////////////
// Advent of Code 2025 Day 1 - Secret Entrance
// Link: https://adventofcode.com/2025/day/1
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Problem Notes
// Cracking a password dial with numbers 0 to 99 to enter the North Pole
// Puzzle input is a list of rotations to make on the dial (L10, R2) where turning right goes to higher numbers, and vice versa
// Dial wraps around, L10 from 0 would end on 95
// Dial starts at 50
// The actual password is the number of times the dial is left pointing at 0 after any rotation in the sequence
////////////////////////////////////////////////////////////////

const fs = require("fs");

const text = fs.readFileSync("days/day-01/input.txt", "utf-8");

const rotations = text.split("\n");

const DIAL_SIZE = 100;

let dial = 50;

let timesPointingAtZero = 0;

console.log(`The dial starts by pointing at ${dial}.`);

for (const rotation of rotations) {
  const direction = rotation.substring(0, 1);
  const distance = parseInt(rotation.substring(1, rotation.length));

  const delta = direction === "L" ? -distance : distance;

  dial = (dial + (delta % DIAL_SIZE) + DIAL_SIZE) % DIAL_SIZE;

  console.log(`The dial is rotated ${rotation} to point at ${dial}.`);

  if (dial === 0) timesPointingAtZero++;
}

console.log(`The password in this example is ${timesPointingAtZero}.`);
