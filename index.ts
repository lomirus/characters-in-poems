//import tangshi from "./data/poetry/tangshi.ts";
import shijing from "./data/poetry/shijing.ts";
import { getBestMatchedResults } from './src/query.ts';
import { highlightByBrackets } from './src/highlight.ts';
import { Poem } from "./src/types.ts";

console.log(
    (
        (poems: Poem[], keyword: string) => 
            highlightByBrackets(
                getBestMatchedResults(poems, keyword)[1], keyword
            )
    )(shijing, "李沁钰")
)