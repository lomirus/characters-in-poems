import { Poem } from "./types.ts";
import { getParagraphPinyin } from "./pinyin.ts";

function getParagraphCount(paragraph: string, keyword: string): number {
    const paragraphPinyin = getParagraphPinyin(paragraph.replace(/[，。！？\[\]]/g, ""));
    const keywordPinyin = getParagraphPinyin(keyword);
    return keywordPinyin.reduce(
        (total, keyword) => paragraphPinyin.includes(keyword) ? total + 1 : total,
        0,
    );
}

function getPoemMaxCount(poem: Poem, keyword: string): [number, string] {
    let maxCount = 0;
    let maxCountParagraph = '';
    poem.content.forEach((paragraph, index) => {
        const count = getParagraphCount(paragraph, keyword);
        if (count > maxCount) {
            maxCount = count;
            maxCountParagraph = poem.content[index];
        }
    })
    return [maxCount, maxCountParagraph];
}

function getBestMatchedResults(poems: Poem[], keyword: string): [number, string[]] {
    let maxCounts: [number, string][] = [];
    poems.forEach((poem) => maxCounts.push(getPoemMaxCount(poem, keyword)));
    const maxCount = Math.max(...maxCounts.map(([count, _]) => count))
    maxCounts = maxCounts.filter(([count, _]) => count === maxCount);
    return [maxCount, maxCounts.map(([_, paragraph]) => paragraph)]
}

export {
    getBestMatchedResults,
}

