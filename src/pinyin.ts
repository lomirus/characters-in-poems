const dict = JSON.parse(await Deno.readTextFile("data/dict.json"));

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

