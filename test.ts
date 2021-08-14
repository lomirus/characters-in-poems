import tangshi from "./data/poetry/tangshi.ts";
import { getBestMatchedParagraph } from './src/index.ts';

console.log(getBestMatchedParagraph(tangshi, "李沁钰"));