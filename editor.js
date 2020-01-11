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
    lineColumnNb.textContent = getLineNumberAndColumnIndex(editable);
    contentPreview.innerHTML = marked(editable.value);
  });

  editable.addEventListener('mouseup', function (e) {
    lineColumnNb.textContent = getLineNumberAndColumnIndex(editable);
    contentPreview.innerHTML = marked(editable.value);
  });

  // scroll
  editable.addEventListener('scroll', (e) => {
    contentPreview.scrollTop = editable.scrollTop;
  });
});