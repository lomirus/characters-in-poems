import { parse } from "https://deno.land/std@0.104.0/flags/mod.ts";

import poetry from "./data/poetry.ts";
import { getMaxCountLines } from './src/query.ts';
import { highlightByColor } from './src/highlight.ts';
import { Poem } from "./src/types.ts";


const args = parse(Deno.args)

const specWord: string = (() => {
    if (!args.keyword && !args.w) {
        console.error(`Invalid keyword`);
        Deno.exit()
    }
    return args.keyword ? args.keyword : args.w
})();

const specPoetry: Poem[] = (args.p ? args.p.split(",") : [])
    .concat((args.poetry ? args.poetry.split(",") : []))
    .reduce((poetries: Poem[], poetryName: string) => {
        if (!Object.keys(poetry).includes(poetryName)) {
            console.error(`Unexpected Poetry Name: ${poetryName}`);
            Deno.exit()
        }
        return [...poetries, ...poetry[poetryName]]
    }, []);

const [maxCount, maxCountLines] = getMaxCountLines(specPoetry, specWord)

console.log(`最高符合字数：${maxCount}字\n`);

maxCountLines.forEach(line => {
    line.paragraph = highlightByColor(line.paragraph, specWord)
    console.log(`${line.paragraph}%c - 《${line.title}》${line.author}%c`, "color: gray", "")
})