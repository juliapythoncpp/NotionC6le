import _ from "lodash";
import { Book } from "../interfaces";
import { computeHighlightsHash, readFromFile } from "../utils";

export class Parser {
  private book?: Book;

  /* Method to print the stats of Clippings read from My Clippings.txt */
  printStats = () => {
    console.log("--------------------------------------");
    console.log(`📝 Title: ${this.book?.title}`);
    console.log(`🙋 Author: ${this.book?.author}`);
    console.log(`💯 Highlights count: ${this.book?.highlights.length}`);
    console.log("--------------------------------------");
  };

  updateBook = (book: Book) => {
    // parse clippings using regex
    book.highlights = book.highlights.filter(h => h.highlight != undefined).sort((a, b) => a.location - b.location);

    this.book = ({
      title: book.title,
      author: book.author,
      highlights: book.highlights,
      hash: computeHighlightsHash(book.highlights),
      bookUrl: book.bookUrl,
      imgUrl: book.imgUrl
    });
  }

  parseClippingsJson = (file: string) => {
    const fileContent = readFromFile(file);
    let book: any = JSON.parse(fileContent);

    if (book.title !== '' && book.author !== '' && book.highlights.length > 0){
      book.highlights = book.highlights.map((h: any) => ({
        highlight: h.text,
        location: h.loc,
        color: h.color
      }));
      this.updateBook(book);
    }
  };

  // parseClippingsJsonOld = (file: string) => {
  //   const fileContent = readFromFile(file);
  //   const book: any = JSON.parse(fileContent);

  //   const title = book.title;
  //   const author = book.author;
  //   const clipsArray: Clipping[] = book.highlights.map((h: any) => ({
  //     highlight: h.text,
  //     location: h.location.value
  //   }));
  //   if (title !== '' && author !== '' && clipsArray.length > 0)
  //     this.updateBook(title, author, book.asin, clipsArray)
  // };

  /* Wrapper method to process clippings */
  processClippings = (file: string): Book | undefined => {
    if(file.endsWith('.txt')){
      //this.parseClippingsTxt(file);
    }else{
      this.parseClippingsJson(file);
    }
    this.printStats();
    return this.book;
  };
}
