var editable = document.getElementById('editor');
var contentPreview = document.getElementById('content');
var lineColumnNb = document.getElementById('line-column-nb');

window.addEventListener('load', () => {

  if (localStorage.getItem('mindown')) {
    let localContent = localStorage.getItem('mindown');
    editable.value = localContent;
    contentPreview.innerHTML = marked(localContent);
  }

  editable.addEventListener('input', function (e) {
    var { currentLineNumber, currentColumnIndex } = getLineNumberAndColumnIndex(editable);
    lineColumnNb.textContent = 'line ' + currentLineNumber + ' Col ' + currentColumnIndex;
    contentPreview.innerHTML = marked(editable.value);
  });

  editable.addEventListener('mouseup', function (e) {
    var { currentLineNumber, currentColumnIndex } = getLineNumberAndColumnIndex(editable);
    lineColumnNb.textContent = 'line ' + currentLineNumber + ' Col ' + currentColumnIndex;
    contentPreview.innerHTML = marked(editable.value);
  });

  // scroll
  editable.addEventListener('scroll', (e) => {
    contentPreview.scrollTop = editable.scrollTop;
    numbers.scrollTop = editable.scrollTop;
  });
});