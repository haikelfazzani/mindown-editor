window.addEventListener('load', () => {
  mdEditor.addEventListener('keydown', (e) => {
    // save content to localStorage
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      saveText(mdEditor.value);
      return false;
    }
    // open file
    if (e.ctrlKey && e.keyCode === 79) {
      e.preventDefault();
      const inputFile = document.getElementById('myFileInput');
      inputFile.click();
      inputFile.addEventListener('change', handleFileSelect);
      return false;
    }
    // open content as Md
    if (e.ctrlKey && e.keyCode === 68) {
      e.preventDefault();
      downloadText(mdEditor.value);
      return false;
    }
    // open content as HTML
    if (e.ctrlKey && e.keyCode === 72) {
      e.preventDefault();
      downloadText(marked(mdEditor.value), 'data:text/html;charset=utf-8,', 'mindown.html');
      return false;
    }
  });
});