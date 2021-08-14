## Characters In Poems

一个用于查询某词语（例如人名）在诗词中出现的同音字的脚本。

目前涵盖的诗词内容有：《唐诗三百首》、《诗经》等。后续可能会增加部分楚辞、宋词等。

## Usage

Example:

```bash
deno run index.ts -w 李小玉 -p shijing,tangshi
```

- `-w`/`--keyword`: 欲查找的汉字词语。
- `-p`/`--poetry`: 查找范围。
    - 若有多个范围，其中间使用半角逗号进行分隔；
    - 目前支持的查找范围有：`tangshi`(《唐诗三百首》)，`shijing`（《诗经》）。