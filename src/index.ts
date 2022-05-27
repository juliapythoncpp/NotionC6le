import { ExtractorRegistry, parseBook, Notion } from "./models";
import { showToast, updateToast } from "./utils";

import "./amazonExtractor";

export async function writeHighlightsToNotion(apiKey: string, bookDbId: string, baseUrl?: string) {

  showToast("");

  const notion = new Notion(apiKey, bookDbId, baseUrl);

  const book = ExtractorRegistry.extract();
  const clippings = parseBook(book);
  if (clippings != undefined) {
    await notion.syncHighlights(clippings);
  }

  updateToast("&#128158; &#128018; &#128150;");
};
