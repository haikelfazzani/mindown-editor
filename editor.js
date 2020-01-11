var editable = document.getElementById('editor');
var lineColumnNb = document.getElementById('line-column-nb');
const contentPreview = document.getElementById('content');

window.addEventListener('load', () => {

  if (localStorage.getItem('mindown')) {
    editable.value = localStorage.getItem('mindown');
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