import shijing from './poetry/shijing.ts';
import chuci from './poetry/chuci.ts';
import tangshi from './poetry/tangshi.ts';
import songci from './poetry/songci.ts';
import quantangshi from './poetry/quantangshi.ts';
import quansongci from './poetry/quansongci.ts';

import { Poem } from "../src/types.ts";

const poetry: Record<string, Poem[]> = {
    shijing,
    chuci,
    tangshi,
    songci,
    quantangshi,
    quansongci
}

export default poetry