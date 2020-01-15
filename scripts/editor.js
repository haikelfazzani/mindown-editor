var mdEditor = document.getElementById('editor');
var contentPreview = document.getElementById('content');
var lineColumnNb = document.getElementById('line-column-nb');

window.addEventListener('load', () => {

  if (localStorage.getItem('mindown')) {
    let localContent = localStorage.getItem('mindown');
    mdEditor.value = localContent;
    contentPreview.innerHTML = marked(localContent);
  }

  // Cursor : get Line Number And Column Index
  mdEditor.addEventListener('input', function (e) {
    var { currentLineNumber, currentColumnIndex } = getLineNumberAndColumnIndex(mdEditor);
    lineColumnNb.textContent = 'line ' + currentLineNumber + ' Col ' + currentColumnIndex;
    contentPreview.innerHTML = marked(mdEditor.value);
  });

  mdEditor.addEventListener('mouseup', function (e) {
    var { currentLineNumber, currentColumnIndex } = getLineNumberAndColumnIndex(mdEditor);
    lineColumnNb.textContent = 'line ' + currentLineNumber + ' Col ' + currentColumnIndex;
    contentPreview.innerHTML = marked(mdEditor.value);
  });

  // scroll sync : preview with editor
  mdEditor.addEventListener('scroll', (e) => {
    contentPreview.scrollTop = mdEditor.scrollTop;
  });
});