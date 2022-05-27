import { BookExtractor } from "../interfaces";

export namespace ExtractorRegistry {
  interface IExtractorMap {
    [key: string]: BookExtractor
  }

  let extractors: IExtractorMap = {};

  export function register(domain: string, extractor: BookExtractor) { 
    extractors[domain] = extractor
  };
  
  export function extract(){
    const domain = window.location.hostname.split('.').slice(2).join('.');
    let extractor = extractors[domain];
    return extractor();
  }
}