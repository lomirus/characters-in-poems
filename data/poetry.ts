const shijing = JSON.parse(await Deno.readTextFile('data/poetry/shijing.json'));
const chuci = JSON.parse(await Deno.readTextFile('data/poetry/chuci.json'));
const tangshi300 = JSON.parse(await Deno.readTextFile('data/poetry/tangshi300.json'));
const songci300 = JSON.parse(await Deno.readTextFile('data/poetry/songci300.json'));
const tangshi = JSON.parse(await Deno.readTextFile('data/poetry/tangshi.json'));
const songci = JSON.parse(await Deno.readTextFile('data/poetry/songci.json'));

import { Poem } from "../src/types.ts";

const poetry: Record<string, Poem[]> = {
    shijing,
    chuci,
    tangshi300,
    songci300,
    tangshi,
    songci
}

export default poetry