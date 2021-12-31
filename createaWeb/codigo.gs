function createaDoc() {
  const doc = DocumentApp.create(VAL);
}


function doGet(){
  return HtmlService.createHtmlOutputFromFile('index');
}

function doGet1(){
  return HtmlService.createHtmlOutput('hello 2');
}