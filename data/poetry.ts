import shijing from './poetry/shijing.ts';
import chuci from './poetry/chuci.ts';
import tangshi300 from './poetry/tangshi300.ts';
import songci300 from './poetry/songci300.ts';
import tangshi from './poetry/tangshi.ts';
import songci from './poetry/songci.ts';

import { Poem } from "../src/types.ts";

const poetry: Record<string, Poem[]> = {
    shijing,
    chuci,
    tangshi300,
    songci300,
    tangshi,
    songci
}

export default poetry