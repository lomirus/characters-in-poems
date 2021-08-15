import { getCharPinyin, getParagraphPinyin } from "./pinyin.ts";

function highlightByColor(paragraph: string, keyword: string): string {
    return paragraph.split("")
        .map(char =>
            getParagraphPinyin(keyword)
                .includes(getCharPinyin(char)) ? `\x1b[32m${char}\x1b[0m` : char
        )
        .join("")
}

function highlightByBrackets(paragraph: string, keyword: string): string {
    return paragraph.split("")
        .map(char =>
            getParagraphPinyin(keyword)
                .includes(getCharPinyin(char)) ? `[${char}]` : char
        )
        .join("")
}

export {
    highlightByColor,
    highlightByBrackets
}

