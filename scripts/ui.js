document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('disply')
});

// resize mdEditor and content
const resizeBarElement = document.querySelector('.resize-bar');
resizeDivs(resizeBarElement, "H");