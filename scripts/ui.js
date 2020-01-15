window.addEventListener('load', () => {

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

  // fetch from url
  var navbarBrand = document.querySelector('.navbar-brand');
  var isVisible = false;

  navbarBrand.addEventListener('click', () => {
    isVisible = !isVisible;
    const inputFetchUrl = document.getElementById('from-url');
    inputFetchUrl.style.display = isVisible ? 'block' : 'none';
    inputFetchUrl.addEventListener('change', async (e) => {
      if (checkExtension(e.target.value)) {
        const data = await fetchFromUrl(e.target.value);
        mdEditor.value = data;
      }
    });
  });
});