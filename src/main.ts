import { readFileSync } from "fs";
import { Parser, Notion } from "./models";

const homedir = require('os').homedir()
const settings = JSON.parse(readFileSync(`${homedir}/Library/KindleToNotion/settings.json`, 'utf-8'));
process.env.NOTION_API_KEY = settings.NOTION_API_KEY;
process.env.BOOK_DB_ID = settings.BOOK_DB_ID;

const parser = new Parser();
const notion = new Notion();

(async () => {
  const file = process.argv[2];
  console.log(`Start processing file: ${file.replace(/^.*[\\\/]/, '')}`);
  const clippings = parser.processClippings(file);
  if(clippings != undefined)
    await notion.syncHighlights(clippings);
  else
    console.log(`Failed to parse file, aborting!`);
  console.log(`\n\n\n`);
})();
