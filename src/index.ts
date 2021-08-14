import dict from "../data/dict.ts";

import { Poem } from "./types.ts";

function getPinyin(words: string): string[] {
    return words.split("").map((char) => dict[char]);
}

function getParagraphCount(paragraph: string, keyword: string): number {
    const paragraphPinyin = getPinyin(paragraph.replace(/[，。！？\[\]]/g, ""));
    const keywordPinyin = getPinyin(keyword);
    return keywordPinyin.reduce(
        (total, keyword) => paragraphPinyin.includes(keyword) ? total + 1 : total,
        0,
    );
}

function getPoemMaxCount(poem: Poem, keyword: string): [number, string] {
    let maxCount = 0;
    let maxCountParagraph = '';
    poem.content.forEach((paragraph, index) => {
        const Count = getParagraphCount(paragraph, keyword);
        if (Count > maxCount) {
            maxCount = Count;
            maxCountParagraph = poem.content[index];
        }
    })
    return [maxCount, maxCountParagraph];
}

function getBestMatchedParagraph(poems: Poem[], keyword: string): [number, string[]] {
    let maxCounts: [number, string][] = [];
    poems.forEach((poem) => maxCounts.push(getPoemMaxCount(poem, keyword)));
    const maxCount = Math.max(...maxCounts.map(([count, _]) => count))
    maxCounts = maxCounts.filter(([count, _]) => count === maxCount);
    return [maxCount, maxCounts.map(([_, paragraph]) => paragraph)]
}

export {
    getBestMatchedParagraph
}

