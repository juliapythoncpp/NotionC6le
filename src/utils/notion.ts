import { Block, BlockSpec, BlockType, CreatePageProperties } from "../interfaces";

/* Function to make an array of Notion blocks given the array of highlights and the block type
   Used when appending highlights to an existing Notion page for the book */
export const makeBlocks = (highlights: BlockSpec[], type: BlockType): Block[] => {
  const blocks: Block[] = [];
  for (const highlight of highlights) {
    const validHighlight =
      highlight.text.length > 2000 ? highlight.text.substring(0, 2000) : highlight.text;
    const block: Block = {
      object: "block",
      type,
    };
    block[type] = {
      text: [
        {
          type: "text",
          text: {
            content: validHighlight,
            link: null,
          },
        },
      ],
      color: highlight.color,
    };
    blocks.push(block);
  }
  return blocks;
};

/* Function to make an array of Notion blocks with a title: " 🎀 Highlights". 
   Used when creating a new Notion page for the book*/
export const makeHighlightsBlocks = (
  highlights: BlockSpec[],
  type: BlockType
): Block[] => {
  return [
    ...makeBlocks([{text: "Highlights"}], BlockType.heading_1),
    ...makeBlocks(highlights, type),
  ];
};

/* Function to generate the configuration required to create a new Notion page */
export const makePageProperties = (
  pageProperties: CreatePageProperties
): Record<string, unknown> => {
  const properties = {
    "💾": {
      title: [
        {
          text: {
            content: pageProperties.title,
          },
        },
      ],
    },
    "🧠": {
      type: "rich_text",
      rich_text: [
        {
          type: "text",
          text: {
            content: pageProperties.author,
          },
        },
      ],
    },
    "🔗": {
      url: pageProperties.bookUrl
    },
    "🖼": {
      files: [
        {
          type: "external",
          name: "Cover",
          external: {
            url: pageProperties.imgUrl
          }
        }
      ]
    },
    book: {
      type: "rich_text",
      rich_text: [
        {
          type: "text",
          text: {
            content: pageProperties.bookName,
          },
        },
      ],
    },
    sync: {
      type: "rich_text",
      rich_text: [
        {
          type: "text",
          text: { 
            content: pageProperties.hash
          },
        }
      ],
    },
    "🏷": {
      select: {
        name: "book"
      }
    },
    "🔧": {
      select: {
        name: "ondo"
      }
    }
  };
  return properties;
};
