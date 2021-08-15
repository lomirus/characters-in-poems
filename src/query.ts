import { Poem, Line } from "./types.ts";
import { getParagraphPinyin } from "./pinyin.ts";

function getParagraphCount(paragraph: string, keyword: string): number {
    const paragraphPinyin = getParagraphPinyin(paragraph.replace(/[，。！？\[\]]/g, ""));
    const keywordPinyin = getParagraphPinyin(keyword);
    return keywordPinyin.reduce(
        (total, keyword) => paragraphPinyin.includes(keyword) ? total + 1 : total,
        0,
    );
}

function getMaxCountLine(poem: Poem, keyword: string): [number, Line] {
    let maxCount = 0;
    let maxCountLine: Line = {
        title: "",
        author: "",
        paragraph: ""
    };
    poem.content.forEach((paragraph, index) => {
        const count = getParagraphCount(paragraph, keyword);
        if (count > maxCount) {
            maxCount = count;
            maxCountLine = {
                title: poem.title,
                author: poem.author,
                paragraph: poem.content[index]
            }
        }
    })
return [maxCount, maxCountLine];
}

function getMaxCountLines(poems: Poem[], keyword: string): [number, Line[]] {
    let maxCounts: [number, Line][] = [];
    poems.forEach((poem) => maxCounts.push(getMaxCountLine(poem, keyword)));
    const maxCount = Math.max(...maxCounts.map(([count, _]) => count))
    maxCounts = maxCounts.filter(([count, _]) => count === maxCount);
    return [maxCount, maxCounts.map(([_, paragraph]) => paragraph)]
}

export {
    getMaxCountLines,
}

