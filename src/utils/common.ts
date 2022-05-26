import { Book, BookSync, Clipping } from "../interfaces";
import { MD5, enc } from "crypto-js"; 'crypto-js';

export const md5 = (contents: string) => enc.Hex.stringify(MD5(contents));

export const computeHighlightsHash = (clips: Clipping[], n: number | undefined = undefined): string => {
  n ??= clips.length;
  if(n == 0){
    return "0:none";
  }
  const hash = md5(clips.slice(0, n - 1).map(c => `${c.text},${c.location},${c.color}`).join());
  return `${n}:${hash}`;
}

/* Function to get unsynced highlights for each book */
export const getUnsyncedHighlights = (book: Book, hash: string): BookSync => {
  const clips = book.clips;
  const n = Number.parseInt(hash.split(':')[0]);
  const h = computeHighlightsHash(book.clips, n);
  const fullSync = h != hash;
  if(!fullSync){
    return {
      ...book,
      clips: clips.slice(n+1),
      needsFullSync: false
    }
  }else{
    return {
      ...book,
      needsFullSync: true
    }
  }
};
