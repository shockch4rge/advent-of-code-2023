import { readText } from "../readText"

const text = readText(__dirname, "lol.txt");

const cubes = {
    red: 12,
    green: 13,
    blue: 14,
}

const ids: number[] = [];

for (const line of text) {
    const split = line.split(": ") as [string, string];
    const id = +split[0].match(/\d+/)!;
    const game = split[1].replace(/[,|;]\s/gm, ",").split(",")

    const passes = game
        .map(set => {
            const [num, colour] = set.split(" ") as [string, keyof typeof cubes];
            return +num <= cubes[colour];
        })
        .every(Boolean);

    if (!passes) continue;

    ids.push(id);
}

console.log(ids.reduce((a, b) => a + b, 0));
