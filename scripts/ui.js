document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('disply')
});

// resize mdEditor and content
const resizeBarElement = document.querySelector('.resize-bar');
resizeDivs(resizeBarElement, "H");

// create tooltip
var btnToolTip = document.querySelectorAll('[data-tooltip]');
btnToolTip.forEach(t => {
  t.addEventListener("mouseover", (e) => {
    createToolTip(t, e);
  });

  t.addEventListener("mouseout", () => {
    let tooltipText = document.querySelector('.tooltiptext');
    if (tooltipText) { document.body.removeChild(tooltipText); }
  });
});