import { BookExtractor } from "../interfaces";
import { updateToast } from "../utils";

export namespace ExtractorRegistry {
  
  let extractors: {page: string, extractor: BookExtractor}[] = [];

  export function register(page: string, extractor: BookExtractor) { 
    extractors.push({page, extractor});
  };
  
  export function extract(){
    const hostname = window.location.hostname;
    const extractor = extractors.find(e => e.page.includes(hostname))?.extractor;
    if(extractor == undefined){
      updateToast("Goto:<br>");
      extractors.forEach( (_, page) => {
        updateToast(`<a href="${page}"/><br>`);
      });
      return undefined;
    }
    return extractor();
  }
}