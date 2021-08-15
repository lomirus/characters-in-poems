## Characters In Poems

一个用于查询某词语（例如人名）在诗词中出现的同音字的脚本，并输出出现同音字次数为出现同音字最多次数的所有诗句。

## Usage

Example:

```bash
deno run index.ts -w 倪秦宇 -p shijing,tangshi -f bracket 
```

- `-w`/`--keyword`: 必选，欲查找的汉字词语。
- `-p`/`--poetry`: 必选，查找范围。
    - 若有多个范围，其中间使用半角逗号进行分隔；
    - 目前支持的查找范围有：`shijing`:《诗经》，`chuci`:《楚辞》，`tangshi`:《唐诗三百首》，`songci`:《宋词三百首》。
- `-f`/`--format`: 可选，输出高亮格式，默认值为 `color`。
    - 目前支持的高亮格式有：`color`，`bracket`。

Output:

```bash
最高符合字数：2字

嘒彼小星，维参[与]昴。肃肃宵征，抱[衾][与]裯。寔命不犹！ - 《国风·召南·小星》
定之方中，作[于]楚宫。揆之以日，作[于]楚室。树之榛栗，椅桐梓漆，爰伐[琴]桑。 - 《国风·鄘风·定之方中》
弋言加之，[与]子宜之。宜言饮酒，[与]子偕老。[琴]瑟在[御]，莫不静好。 - 《国风·郑风·女曰鸡鸣》
# ...
[玉]阶生白露，夜久[侵]罗袜。 - 《相和歌辞 玉阶怨》李白
就中云幕椒房亲，赐名大国虢[与][秦]。 - 《杂曲歌辞 丽人行》杜甫
赵瑟初停凤凰柱，蜀[琴][欲]奏鸳鸯弦。 - 《杂曲歌辞 长相思三首 二》李白
```

## License

本项目基于 MIT 协议，同时使用了同样基于 MIT 协议的下列开源项目的部分代码，并做了部分修改：

- [chinese-poetry](https://github.com/chinese-poetry/chinese-poetry) by [chinese-poetry](https://github.com/chinese-poetry)
- [pinyinjs](https://github.com/sxei/pinyinjs) by [sxei](https://github.com/sxei)