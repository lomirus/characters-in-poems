import shijing from './poetry/shijing.ts';
import tangshi from './poetry/tangshi.ts';

import { Poem } from "../src/types.ts";

const poetry: Record<string, Poem[]> = {
    shijing,
    tangshi
}

export default poetry