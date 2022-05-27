// require("dotenv").config();
import { NotionAdapter } from "../adapters";
import { Book } from "../interfaces";
import { CreatePageParams, Emoji, BlockType } from "../interfaces";
import {
  makeHighlightsBlocks,
  getUnsyncedHighlights,
  makeBlocks,
  updateToast
} from "../utils";

export class Notion {
  private notion;
  private bookDbId : string;

  constructor(apiKey: string, bookDbId: string, baseUrl?: string) {
    this.notion = new NotionAdapter(apiKey, baseUrl);
    this.bookDbId = bookDbId;
  }

  /* Method to get Notion block id of the Notion page given the book name */
  getIdFromBookName = async (bookName: string) => {
    const response = await this.notion.queryDatabase({
      database_id: this.bookDbId,
      filter: {
        or: [
          {
            property: "book",
            text: {
              equals: bookName,
            },
          },
        ],
      },
    });
    const [book]: any[] = response.results;
    if (book) {
      return {
        id: book.id,
        SyncHash: book.properties.sync.rich_text[0].text.content
      };
    } else {
      return null;
    }
  };

  /* Method to sync highlights to notion */
  syncHighlights = async (book: Book) => {
    try {
      updateToast(`<br>🔁 Syncing book: ${book.title}`);
      let _bookDb = await this.getIdFromBookName(book.title);
      let bookId = _bookDb?.id;
      const sync = getUnsyncedHighlights(book, _bookDb?.SyncHash ?? "0:");
      if (bookId && sync.needsFullSync) {
        updateToast(`<br>⚠️  Highlights changed, book will be deleted!`);
        await this.notion.archivePage(bookId);
        bookId = undefined;
      }

      if (sync.clips.length > 0) {
        if (bookId) {
          updateToast(`<br>📚 Book already present, appending highlights`);
          await this.notion.appendBlockChildren(
            bookId,
            makeBlocks(sync.clips, BlockType.quote)
          );

          await this.notion.updatePage({
            pageId: bookId,
            properties: {
              title: sync.title,
              bookName: sync.title,
              author: sync.author,
              hash: sync.hash,
              bookUrl: sync.bookUrl,
            },
            isDelete: false,
          });
        } else {
          updateToast(`<br>📚 Book not present, creating notion page`);
          const createPageParams: CreatePageParams = {
            parentDatabaseId: this.bookDbId,
            properties: {
              title: sync.title,
              author: sync.author,
              bookName: sync.title,
              hash: sync.hash,
              bookUrl: sync.bookUrl,
              imgUrl: sync.imgUrl,
            },
            children: makeHighlightsBlocks(sync.clips, BlockType.quote),
            icon: Emoji["📖"], //🔖
            cover: undefined
          };
          await this.notion.createPage(createPageParams);
        }
        updateToast("<br>✅ Successfully synced highlights to Notion");
      } else {
        updateToast("<br>🟢 Book is already synced!");
      }
    } catch (error: unknown) {
      updateToast("<br>❌ Failed to sync highlights");
      throw error;
    }
  };
}
