import { extractBook, parseBook, Notion } from "./models";
import { showToast, updateToast } from "./utils";

export async function writeHighlightsToNotion(apiKey: string, bookDbId: string) {

  showToast("");

  const notion = new Notion(apiKey, bookDbId);

  const book = extractBook();
  const clippings = parseBook(book);
  if (clippings != undefined) {
    await notion.syncHighlights(clippings);
  }

  updateToast("&#128158; &#128018; &#128150;");
};
