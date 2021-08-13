import dict from "./dict.ts";

interface Poem {
    content: string[]
}

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

function getPoemTotalPower(poem: Poem, keyword: string) {
    return poem.content.reduce(
        (total, paragraph) => total + getParagraphPower(paragraph, keyword),
        0,
    );
}

function getPoemMaxPower(poem: Poem, keyword: string) {
    return poem.content.reduce(
        (max, paragraph) => {
            const cur = getParagraphPower(paragraph, keyword);
            return cur > max ? cur : max;
        },
        0,
    );
}

console.log(getPoemTotalPower({ content: ["清明时节雨纷纷，路上行人欲断魂"] }, "于小明"));
