import dict from "./dict.ts";

function getPinyin(words: string): string[] {
  return words.split("").map((char) => dict[char]);
}

console.log(getPinyin("测试"))
