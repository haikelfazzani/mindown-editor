function replaceSelectionWithHtml (startTag, endTag) {
  let txtarea = document.getElementById("editor");

  let startSelection = txtarea.selectionStart;
  let endSelection = txtarea.selectionEnd;

  let allText = txtarea.value;
  let selectedText = allText.slice(startSelection, endSelection);

  let newText = allText.slice(0, startSelection)
    + startTag + selectedText + (endTag || '')
    + allText.slice(endSelection, allText.length);

  txtarea.value = newText;
}

function getLineNumberAndColumnIndex (textarea) {
  let textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
  let currentLineNumber = textLines.length;
  let currentColumnIndex = textLines[textLines.length - 1].length;
  return "Line " + currentLineNumber + "  Column " + currentColumnIndex;
}

function downloadText (text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', 'mindwon.md');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function saveText (text) {
  localStorage.setItem('mindown', text)
}