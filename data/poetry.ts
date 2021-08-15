import shijing from './poetry/shijing.ts';
import chuci from './poetry/chuci.ts';
import tangshi from './poetry/tangshi.ts';
import songci from './poetry/songci.ts';

import { Poem } from "../src/types.ts";

const poetry: Record<string, Poem[]> = {
    shijing,
    chuci,
    tangshi,
    songci,
}

export default poetry