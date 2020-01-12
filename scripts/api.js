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
  return { currentLineNumber, currentColumnIndex };
}

function downloadText (text, dataType = 'data:text/plain;charset=utf-8,', filename = 'mindwon.md') {
  let element = document.createElement('a');
  element.setAttribute('href', dataType + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function saveText (text) {
  if (text && text.length > 1) {
    localStorage.setItem('mindown', text);
  }
}

// handle file & read content
function handleFileSelect (event) {
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad (event) {
  editable.value = event.target.result;
}