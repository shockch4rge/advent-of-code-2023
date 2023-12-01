import { readFileSync } from "fs";
import path from "path";

const text = readFileSync(path.join(__dirname, "lol.txt"), "utf-8").split("\r\n");
const numbers: number[] = [];

for (const line of text) {
    const nums: string[] = [];

    for (const char of line) {
        const digit = Number.parseInt(char);

        if (Number.isInteger(digit)) {
            nums.push(char);
        }
    }

    numbers.push(Number.parseInt(`${nums[0]}${nums.at(-1)!}`))
}

console.log(numbers.reduce((a, b) => a + b, 0));
