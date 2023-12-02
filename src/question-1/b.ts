import { readFileSync } from "fs";
import path from "path";
import { readText } from "../readText";

const text = readText(__dirname, "lol.txt")
const wordDigits = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
] as const

const numbers: number[] = [];

for (const line of text) {
    let nums: number[] = [];

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        const digits = wordDigits
            .filter(([word]) => line.slice(i).startsWith(word))
            .map(([, index]) => index)
            .at(0);

        nums.push(digits ?? Number.parseInt(char));
    }

    nums = nums.filter(Boolean);
    numbers.push(Number.parseInt(`${nums[0]}${nums.at(-1)!}`))
}

console.log(numbers.reduce((a, b) => a + b, 0));
