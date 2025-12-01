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

console.log(text);
