import dict from "../data/dict.ts";

function getCharPinyin(char: string): string {
    return dict[char]
}

function getParagraphPinyin(words: string): string[] {
    return words
        .split("")
        .map(getCharPinyin);
}

export {
    getCharPinyin,
    getParagraphPinyin
}

