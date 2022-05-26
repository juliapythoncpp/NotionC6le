import { BlockType } from "./notion";

export interface Clipping {
  text: string;
  location?: number;
  type?: BlockType;
  color: string;
}

export interface Book {
  title: string;
  author: string;
  clips: Clipping[];
  bookUrl: string;
  imgUrl?: string;
  hash: string;
}

export interface BookSync extends Book {
  needsFullSync: boolean;
}