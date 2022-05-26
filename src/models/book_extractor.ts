import { BlockType, Book, Clipping } from "../interfaces";
import { updateToast } from "../utils";

enum Urls {
  Amazon = "https://read.amazon.com/notebook",
  GooglePlay = "https://play.google.com"
}

export const extractBook = () => {
  const url = window.location.href
  if(url == Urls.Amazon.valueOf()){
    return extractAmazon()
  }else {
    return undefined;
  }
};

const extractAmazon = () => {
  try {
    const title = document.querySelector(
      "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > h3"
    )?.textContent;
    console.log(`title: ${title}`);

    const author = document.querySelector(
      "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > p.a-spacing-none.a-spacing-top-micro.a-size-base.a-color-secondary.kp-notebook-selectable.kp-notebook-metadata"
    )?.textContent;
    console.log(`author: ${author}`);

    const bookLink = document
      .querySelector(
        "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a"
      )?.getAttribute("href");
    console.log(`bookLink: ${bookLink}`);

    const imageLink = document
      .querySelector(
        "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a > span > img"
      )?.getAttribute("src")?.replace("._SY160", "");
    console.log(`imgLink: ${imageLink}`);

    const _highlights = document.querySelectorAll(
      "#kp-notebook-annotations > div.a-row.a-spacing-base"
    );

    const highlights = Array.from(_highlights).map((el) => {
      const loc = parseInt(
        el.querySelector("#kp-annotation-location")?.getAttribute("value") ?? "-1"
      );
      let color = el
        .querySelector("#annotationHighlightHeader")?.textContent?.split(" ")[0]?.toLowerCase();
      const text = el.querySelector("#highlight,#note");
      if (text?.id === "note") {
        color = "gray";
      }
      let blockType: BlockType;
      switch(color) {
        case "yellow":
          blockType = BlockType.bulleted_list_item;
          color = "default";
          break;
        case "pink":
          blockType = BlockType.paragraph;
          color = "default";
          break;
        case "blue":
          blockType = BlockType.heading_3;
          color = "default;"
          break;
        case "orange":
          blockType = BlockType.quote;
          color = "pink";
          break;
        default:
          blockType = BlockType.quote;
          color = "red_background";
      }

      const clip : Clipping = {
        type: blockType,
        location: loc,
        color: color!,
        text: text?.textContent ?? `⚠️ @ ${loc}`,
      };
      return clip;
    });
    updateToast(`Processed ${highlights.length} highlights`);

    const book: Book = {
      title: title ?? "Author wasn't inspired!",
      author: author ?? "Anonymous",
      clips: highlights,
      bookUrl: bookLink ?? "http://the-void.com",
      imgUrl: imageLink,
      hash: "0:none"
    };

    return book;
  } catch (err) {
    const result = window.confirm("Go to read.amazon.com/notebooks ?");
    if (result) {
      window.open("https://read.amazon.com/notebook", "_blank");
    }
  }

  return undefined;
};