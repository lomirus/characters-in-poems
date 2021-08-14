## Characters In Poems

一个用于查询某词语（例如人名）在诗词中出现的同音字的脚本，并输出出现同音字次数为出现同音字最多次数的所有诗句。

目前涵盖的诗词内容有：《唐诗三百首》、《诗经》等。后续可能会增加部分楚辞、宋词等。

## Usage

Example:

```bash
deno run index.ts -w 倪秦宇 -p shijing,tangshi
```

- `-w`/`--keyword`: 欲查找的汉字词语。
- `-p`/`--poetry`: 查找范围。
    - 若有多个范围，其中间使用半角逗号进行分隔；
    - 目前支持的查找范围有：`tangshi`(《唐诗三百首》)，`shijing`（《诗经》）。

Output:

```jsonc
[
  "嘒彼小星，维参[与]昴。肃肃宵征，抱[衾][与]裯。寔命不犹！",
  "定之方中，作[于]楚宫。揆之以日，作[于]楚室。树之榛栗，椅桐梓漆，爰伐[琴]桑。",
  "弋言加之，[与]子宜之。宜言饮酒，[与]子偕老。[琴]瑟在[御]，莫不静好。",
  // ...
  "[玉]阶生白露，夜久[侵]罗袜。",
  "就中云幕椒房亲，赐名大国虢[与][秦]。",
  "赵瑟初停凤凰柱，蜀[琴][欲]奏鸳鸯弦。"
]
```

## License

本项目采用 MIT 协议，并使用了同样基于 MIT 协议的下列开源项目：

- [chinese-poetry](https://github.com/chinese-poetry/chinese-poetry) by [chinese-poetry](https://github.com/chinese-poetry)
- [pinyinjs](https://github.com/sxei/pinyinjs) by [sxei](https://github.com/sxei)