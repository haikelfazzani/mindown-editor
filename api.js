function replaceSelectionWithHtml (startTag, endTag) {
  let txtarea = document.getElementById("editor");

  let startSelection = txtarea.selectionStart;
  let endSelection = txtarea.selectionEnd;

  let allText = txtarea.value;
  let selectedText = allText.slice(startSelection, endSelection);

  let newText = allText.slice(0, startSelection)
    + startTag + selectedText + (endTag||'')
    + allText.slice(endSelection, allText.length);

  txtarea.value = newText;
}

function getLineNumberAndColumnIndex(textarea){
  var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
  var currentLineNumber = textLines.length;
  var currentColumnIndex = textLines[textLines.length-1].length;
  return "Line "+ currentLineNumber+" Column "+currentColumnIndex;
}