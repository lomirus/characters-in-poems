import tangshi from "./data/poetry/tangshi.ts";
import {getPoemMaxPower} from './src/index.ts';

tangshi.forEach((poem) => {
    const [maxPower, maxPowerId] = getPoemMaxPower(poem, "王小明");
    if (maxPower > 2) {
        console.log(maxPower)
        console.log(poem.content[maxPowerId])
    }
});