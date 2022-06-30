
import axios, { AxiosError } from 'axios';
import { JSDOM } from 'jsdom';

function fetchPage(url: string): Promise<string | undefined> {
  const HTMLData = axios
    .get(url)
    .then(res => res.data)
    .catch((error: AxiosError) => {
      console.error(`There was an error with ${error.config.url}.`);
      console.error(error.toJSON());
    });
  return HTMLData;
}

async function getData(){
    const url = String(process.argv[2]);
    const data = await fetchPage(url);
    const dom = new JSDOM(data);
    return dom.window.document;
}

function extractData(document: Document) {
    const writingLinks = 
      document.querySelectorAll('div.tablerow.row');
    return writingLinks;
}

async function getAll(){
    const document = await getData();
    const data = extractData(document);
    data.forEach(element => console.log(element.textContent));
    return data;
}

// trnaform data to json
function transformData(data: any){
    const jsonData = data.replace(/[^\p{L}\p{N}\p{Z}\n\s]/gu, '').split('\n');
    return jsonData;
}

getAll();