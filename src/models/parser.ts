import { Book } from "../interfaces";
import { computeHighlightsHash } from "../utils";
import { updateToast } from "../utils/browser";

export const parseBook = (book?: Book) => {
  var res: Book | undefined;
  if (book != undefined && book.title !== '' && book.author !== '' && book.clips.length > 0){
    book.clips.sort((a, b) => (a.location ?? Number.MAX_VALUE) - (b.location ?? Number.MAX_VALUE));
    book.hash = computeHighlightsHash(book.clips);
    res = book;
  }
  if(res != undefined){
    updateToast(
      `<br>📝 Title: ${res?.title}` +
      `<br>🙋 Author: ${res?.author}` +
      `<br>💯 Highlights count: ${res?.clips.length}`
    );
  }else {
    updateToast(`<br>❌ Failed to capture highlights 😢!`);
  }
  return res;
};
