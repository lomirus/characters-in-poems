export interface Poem {
  title: string;
  content: string[];
}

export interface Tangshi extends Poem {
  author: string;
}

export interface Shijing extends Poem {
  chapter: string;
  section: string;
}
