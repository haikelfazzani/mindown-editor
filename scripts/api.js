function replaceSelectionWithHtml (startTag, endTag) {
  let txtarea = document.getElementById("editor");

  let startSelection = txtarea.selectionStart;
  let endSelection = txtarea.selectionEnd;

  let allText = txtarea.value;
  let selectedText = allText.slice(startSelection, endSelection);

  let newText = allText.slice(0, startSelection)
    + startTag + selectedText + (endTag || '')
    + allText.slice(endSelection, allText.length);

  txtarea.value = newText;
}

function getLineNumberAndColumnIndex (textarea) {
  let textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
  let currentLineNumber = textLines.length;
  let currentColumnIndex = textLines[textLines.length - 1].length;
  return { currentLineNumber, currentColumnIndex };
}

function downloadText (text, dataType = 'data:text/plain;charset=utf-8,', filename = 'mindwon.md') {
  let element = document.createElement('a');
  element.setAttribute('href', dataType + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function saveText (text) {
  if (text && text.length >= 1) {
    localStorage.setItem('mindown', text);
  }
}

// handle file & read content
function handleFileSelect (event) {
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad (event) {
  mdEditor.value = event.target.result;
}

// resize divs
function resizeDivs (element, direction) {
  var md; // remember mouse down info
  element.onmousedown = onMouseDown;

  function onMouseDown (e) {
    //console.log("mouse down: " + e.clientX);
    md = {
      e,
      offsetLeft: element.offsetLeft,
      offsetTop: element.offsetTop,
      firstWidth: mdEditor.offsetWidth,
      secondWidth: contentPreview.offsetWidth
    };
    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
    }
  }

  function onMouseMove (e) {
    //console.log("mouse move: " + e.clientX);
    var delta = { x: e.clientX - md.e.x, y: e.clientY - md.e.y };

    if (direction === "H") {
      // prevent negative-sized elements
      delta.x = Math.min(Math.max(delta.x, -md.firstWidth), md.secondWidth);

      element.style.left = md.offsetLeft + delta.x + "px";
      mdEditor.style.width = (md.firstWidth + delta.x) + "px";
      contentPreview.style.width = (md.secondWidth - delta.x) + "px";
    }
  }
}

function createToolTip (parentNode,e) {
  if (e.offsetX >= 0 && e.offsetX <= parentNode.offsetWidth && e.offsetY >= 0 && e.offsetY <= parentNode.offsetHeight) {
    var tooltip = document.createElement("span");
    tooltip.classList.add('tooltiptext');

    tooltip.style.top = (parentNode.offsetTop + 30) + 'px';
    tooltip.style.left = (parentNode.offsetLeft + 10) + 'px';

    tooltip.textContent = parentNode.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);

    if ((tooltip.offsetWidth + tooltip.offsetLeft) >= screen.width) {
      tooltip.style.left = (screen.width - (tooltip.offsetWidth + 50)) + 'px';
    }
  }
}