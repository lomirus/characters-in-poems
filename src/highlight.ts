import { getCharPinyin, getParagraphPinyin } from "./pinyin.ts";

function highlightByBrackets(paragraphs: string[], keyword: string): string[] {
    return paragraphs
        .map(paragraph => paragraph.split("")
            .map(char =>
                getParagraphPinyin(keyword)
                    .includes(getCharPinyin(char)) ? `[${char}]` : char
            )
            .join("")
        )
}

export {
    highlightByBrackets
}

