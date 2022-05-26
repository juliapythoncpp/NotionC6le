// require("dotenv").config();
import { NotionAdapter } from "../adapters";
import { BlockSpec, Book } from "../interfaces";
import { CreatePageParams, Emoji, BlockType } from "../interfaces";
import {
  makeHighlightsBlocks,
  getUnsyncedHighlights,
  makeBlocks,
} from "../utils";

export class Notion {
  private notion;

  constructor() {
    this.notion = new NotionAdapter();
  }

  /* Method to get Notion block id of the Notion page given the book name */
  getIdFromBookName = async (bookName: string) => {
    const response = await this.notion.queryDatabase({
      database_id: process.env.BOOK_DB_ID as string,
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
      console.log(`\n🔁 Syncing book: ${book.title}`);
      let _bookDb = await this.getIdFromBookName(book.title);
      let bookId = _bookDb?.id;
      const sync = getUnsyncedHighlights(book, _bookDb?.SyncHash ?? "0:");
      if (bookId && sync.needsFullSync) {
        console.log(`⚠️  Highlights changed, book will be deleted!`);
        await this.notion.archivePage(bookId);
        bookId = undefined;
      }

      if (sync.highlights.length > 0) {
        let highlights: BlockSpec[] = sync.highlights.map(c => ({text:c.highlight, color: c.color}));
        if (bookId) {
          console.log(`📚 Book already present, appending highlights`);
          await this.notion.appendBlockChildren(
            bookId,
            makeBlocks(highlights, BlockType.quote)
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
          console.log(`📚 Book not present, creating notion page`);
          const createPageParams: CreatePageParams = {
            parentDatabaseId: process.env.BOOK_DB_ID as string,
            properties: {
              title: sync.title,
              author: sync.author,
              bookName: sync.title,
              hash: sync.hash,
              bookUrl: sync.bookUrl,
              imgUrl: sync.imgUrl,
            },
            children: makeHighlightsBlocks(highlights, BlockType.quote),
            icon: Emoji["📖"], //🔖
            cover: undefined
          };
          await this.notion.createPage(createPageParams);
        }
        console.log("\n✅ Successfully synced highlights to Notion");
      } else {
        console.log("🟢 Book is already synced!");
      }
    } catch (error: unknown) {
      console.error("❌ Failed to sync highlights", error);
      throw error;
    } finally {
      console.log("--------------------------------------");
    }
  };
}
