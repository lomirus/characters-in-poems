//import tangshi from "./data/poetry/tangshi.ts";
import shijing from "./data/poetry/shijing.ts";
import { getBestMatchedParagraph, highlightByBrackets } from './src/index.ts';

const [_, paragraphs] = getBestMatchedParagraph(shijing, "李沁钰");
const highlightedParagraphs = highlightByBrackets(paragraphs, "李沁钰");
console.log(highlightedParagraphs)