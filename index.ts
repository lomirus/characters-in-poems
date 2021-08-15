import { parse } from "https://deno.land/std@0.104.0/flags/mod.ts";

import poetry from "./data/poetry.ts";
import { getMaxCountLines } from './src/query.ts';
import { highlightByBrackets, highlightByColor } from './src/highlight.ts';
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

const specFormat: string = (() => {
    if (args.format) {
        if (["color", "bracket"].includes(args.format)) {
            return args.format
        } else {
            console.error(`Invalid format`);
            Deno.exit()
        }
    }

    if (args.f) {
        if (["color", "bracket"].includes(args.f)) {
            return args.f
        } else {
            console.error(`Invalid format`);
            Deno.exit()
        }
    }

    return "color"
})();


const [maxCount, maxCountLines] = getMaxCountLines(specPoetry, specWord)

console.log(`最高符合字数：${maxCount}字\n`);

maxCountLines.forEach(line => {
    line.paragraph = specFormat === "color" ?
        highlightByColor(line.paragraph, specWord) :
        highlightByBrackets(line.paragraph, specWord)
    console.log(`${line.paragraph}%c - 《${line.title}》${line.author}%c`, "color: gray", "")
})