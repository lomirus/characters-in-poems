import dict from "../data/dict.ts";

import { Poem } from "./types.ts";

function getPinyin(words: string): string[] {
    return words.split("").map((char) => dict[char]);
}

function getParagraphPower(paragraph: string, keyword: string): number {
    const paragraphPinyin = getPinyin(paragraph.replace(/[，。！？]/g, ""));
    const keywordPinyin = getPinyin(keyword);
    return keywordPinyin.reduce(
        (total, keyword) => paragraphPinyin.includes(keyword) ? total + 1 : total,
        0,
    );
}

function getPoemMaxPower(poem: Poem, keyword: string): [number, number] {
    let maxPower = 0;
    let maxPowerId = 0;
    poem.content.forEach((paragraph, index) => {
        const power = getParagraphPower(paragraph, keyword);
        if (power > maxPower) {
            maxPower = power;
            maxPowerId = index;
        }
    })
    return [maxPower, maxPowerId];
}

export {
    getPoemMaxPower
}

