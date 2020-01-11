var editable = document.getElementById('editor');
var lineColumnNb = document.getElementById('line-column-nb');

editable.addEventListener('input', function (e) {
  lineColumnNb.textContent = getLineNumberAndColumnIndex(editable);
  document.getElementById('content').innerHTML = marked(editable.value);
});

editable.addEventListener('mouseup', function (e) {
  lineColumnNb.textContent = getLineNumberAndColumnIndex(editable);
  document.getElementById('content').innerHTML = marked(editable.value);
});

// Editor : nav bar actions
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    switch (button.id) {
      case 'btn-bold':
        replaceSelectionWithHtml(' **', '** ');
        break;

      case 'btn-italic':
        replaceSelectionWithHtml(' *', '* ');
        break;

      case 'h1':
        replaceSelectionWithHtml('# ');
        break;

      case 'h2':
        replaceSelectionWithHtml('## ');
        break;

      case 'h3':
        replaceSelectionWithHtml('### ');
        break;

      case 'btn-checkbox':
        replaceSelectionWithHtml('- [x] ');
        break;

      case 'btn-list':
        replaceSelectionWithHtml('- ');
        break;

      case 'btn-ordred-list':
        replaceSelectionWithHtml('1. ');
        break;

      case 'btn-table':
        replaceSelectionWithHtml(`\n
| Header | Title |
| ----------- | ----------- |
| Paragraph | Text |
        \n`);
        break;

      case 'btn-blockquote':
        replaceSelectionWithHtml('> ');
        break;

      case 'btn-link':
        replaceSelectionWithHtml('\n[Github](https://github.com/haikelfazzani)\n');
        break;

      case 'btn-image':
        replaceSelectionWithHtml('![alt text](https://i.ibb.co/xqZX2hP/python.jpg)');
        break;

      case 'btn-code':
        replaceSelectionWithHtml(' ``` ', ' ``` ');
        break;

      case 'btn-block-code':
        replaceSelectionWithHtml(' ``` \n', '\n ```');
        break;

      default:
        break;
    }
  });
});
