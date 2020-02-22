window.addEventListener('load', () => {
  // Editor : navbar actions
  document.querySelectorAll('.navbar-nav button').forEach(button => {
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

        case 'btn-yt':
          replaceSelectionWithHtml('\n[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/t47sBiy2lfo/0.jpg)](http://www.youtube.com/watch?v=t47sBiy2lfo)');
          break;

        case 'btn-code':
          replaceSelectionWithHtml('\n``` ', ' ```\n');
          break;

        case 'btn-block-code':
          replaceSelectionWithHtml('\n``` \n', '\n ```\n');
          break;

        case 'btn-line':
          replaceSelectionWithHtml('\n___\n');
          break;

        case 'btn-date-time':
          replaceSelectionWithHtml(' ' + new Date().toString().slice(0, 24) + ' ');
          break;

        case 'btn-eraser':
          mdEditor.value = '';
          break;

        case 'btn-download':
          downloadText(mdEditor.value);
          break;

        case 'btn-save':
          saveText(mdEditor.value);
          break;

        case 'btn-open':
          const inputFile = document.getElementById('myFileInput');
          inputFile.click();
          inputFile.addEventListener('change', handleFileSelect);
          break;

        case 'btn-html':
          downloadText(marked(mdEditor.value), 'data:text/html;charset=utf-8,', 'mindown.html');
          break;

        case 'btn-full-screen':
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
          break;

        default:
          break;
      }
    });
  });
});