window.addEventListener('load', () => {
  // Editor : navbar actions
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      switch (button.id) {
        case 'btn-bold':
          replaceSelectionWithHtml('**', '**');
          break;

        case 'btn-italic':
          replaceSelectionWithHtml('*', '*');
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

          case 'strike':
          replaceSelectionWithHtml('~~', '~~');
          break;

        case 'btn-checkbox':
          replaceSelectionWithHtml('\n- [x] ');
          break;

        case 'btn-list':
          replaceSelectionWithHtml('\n- ');
          break;

        case 'btn-ordred-list':
          replaceSelectionWithHtml('\n1. ');
          break;

        case 'btn-table':
          replaceSelectionWithHtml(`\n
| Header | Title |
| ----------- | ----------- |
| Paragraph | Text |
        \n`);
          break;

        case 'btn-blockquote':
          replaceSelectionWithHtml('\n> ');
          break;

        case 'btn-link':
          replaceSelectionWithHtml('\n[Github](https://github.com/haikelfazzani)\n');
          break;

        case 'btn-image':
          replaceSelectionWithHtml('![alt text](https://i.ibb.co/xqZX2hP/python.jpg)');
          break;

        case 'btn-code':
          replaceSelectionWithHtml('\n``` ', ' ```\n');
          break;

        case 'btn-block-code':
          replaceSelectionWithHtml('\n``` \n', '\n ```\n');
          break;

        case 'btn-eraser':
          editable.value = '';
          break;

        case 'btn-download':
          downloadText(editable.value)
          break;

        case 'btn-save':
          saveText(editable.value)
          break;

        default:
          break;
      }
    });
  });
});