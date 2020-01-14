document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('disply')
});

// resize mdEditor and content
const resizeBarElement = document.querySelector('.resize-bar');
resizeDivs(resizeBarElement, "H");

// create tooltip
const btnToolTip = document.querySelectorAll('[data-tooltip]');
btnToolTip.forEach(t => {
  t.addEventListener("mouseover", (e) => {  
    if (e.offsetX >= 0 && e.offsetX <= t.offsetWidth && e.offsetY >= 0 && e.offsetY <= t.offsetHeight) {     
      var tooltip = document.createElement("span");
      tooltip.classList.add('tooltiptext');      

      tooltip.style.top = (t.offsetTop+30) + 'px';
      tooltip.style.left = (t.offsetLeft+10) + 'px';

      tooltip.textContent = t.getAttribute('data-tooltip');
      document.body.appendChild(tooltip);      

      if((tooltip.offsetWidth+tooltip.offsetLeft) >= screen.width) {
        tooltip.style.left = (screen.width-(tooltip.offsetWidth+50)) + 'px';
      }      
    }
  });

  t.addEventListener("mouseout", () => {
    document.body.removeChild(document.querySelector('.tooltiptext'));
  });
});