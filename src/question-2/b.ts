import { readText } from "../readText"

const text = readText(__dirname, "lol.txt");
const powers: number[] = []

for (const line of text) {
    const split = line.split(": ") as [string, string];
    const game = split[1].replace(/[,|;]\s/gm, ",").split(",")
    const colours: Record<string, number> = {
        red: 0,
        green: 0,
        blue: 0,
    }

    for (const set of game) {
        const [num, colour] = set.split(" ") as [string, string];

        if (colours[colour] >= +num) continue;

        colours[colour] = +num;
    }

    powers.push(Object.values(colours).reduce((a, b) => a * b, 1));
}

console.log(powers.reduce((a, b) => a + b, 0));