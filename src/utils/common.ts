import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { Book, BookSync, Clipping } from "../interfaces";
import * as crypto from 'crypto';

export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

/* Function to write to a file given the file, fileName and optionally the dirName */
export const writeToFile = (
  file: any,
  fileName: string,
  dirName: string
): void => {
  writeFileSync(
    getFilePath(fileName, dirName),
    JSON.stringify(file)
  );
};

export const getBookJsonFilename = (book: Book) => 
  `${book.title}_${book.author}.json`.replace(/[^a-z0-9\.]/gi, "-");

export const getFilePath = (fileName: string, dirName?: string) => 
  dirName == null ? fileName : path.join(dirName, fileName);

/* Function to read a file given the fileName and optionally the dirName */
export const readFromFile = (fileName: string, dirName?: string): string => {
  return readFileSync( getFilePath(fileName, dirName), "utf-8" );
};

export const computeHighlightsHash = (clips: Clipping[], n: number | undefined = undefined): string => {
  n ??= clips.length;
  const hash = md5(clips.slice(0, n - 1).map(c => `${c.highlight},${c.location},${c.color}`).join());
  return `${n}:${hash}`;
}

/* Function to get unsynced highlights for each book */
export const getUnsyncedHighlights = (book: Book, hash: string): BookSync => {
  const clips = book.highlights;
  const n = Number.parseInt(hash.split(':')[0]);
  const h = computeHighlightsHash(book.highlights, n);
  const fullSync = h != hash;
  if(!fullSync){
    return {
      ...book,
      highlights: clips.slice(n+1),
      needsFullSync: false
    }
  }else{
    return {
      ...book,
      needsFullSync: true
    }
  }
};
