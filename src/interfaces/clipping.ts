export interface Clipping {
  location: number;
  color: string;
  highlight: string;
}

export interface Book {
  title: string;
  author: string;
  highlights: Clipping[];
  hash: string;
  bookUrl: string | undefined;
  imgUrl: string | undefined;
}

export interface BookSync extends Book {
  needsFullSync: boolean;
}