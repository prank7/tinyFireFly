const editor = document.getElementById('editory');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');

const holdSelection = document.getElementById('hold-select');

const classInputBtn = document.getElementById('class-input-btn');
const classInputBox = document.getElementById('class-input-box');


let tempHold;

editor.addEventListener('keydown', (e) => {
  console.log(e)


  // ctrl was down when a/A was pressed
  if(e.metaKey && (e.keyCode == 65 || e.keyCode == 97)) { 
    console.log('select')
  }

});

// findout range. 
// find out the parent element of that range.
// DOM manipulate to add the class.

// function getSelectionText() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     return text;
// }

bold.addEventListener('click', (e) => {
  console.log(e, window.getSelection().toString(), window.getSelection().rangeCount);
  document.execCommand('bold', false, '');
});


italic.addEventListener('click', (e) => {
  console.log(e, window.getSelection().toString(), window.getSelection().rangeCount);
  document.execCommand('italic', false, '');
});


// Apply ClassList to the selected area
classInputBtn.addEventListener('click', (e) => {
  const classNames = document.getElementById('class-input-box').value.trim().split(',');
  const trimmedClassNames = classNames.map((a) => a.trim());
  classNames.length > 0 ? tempHold.classList.add(...trimmedClassNames) : null;
});

// Hold ClassList of the selected area in a global variable
holdSelection.addEventListener('click', (e) => {
  tempHold = window.getSelection().anchorNode.parentNode;

  let classesList = [];
  tempHold.classList.forEach((a) => classesList.push(a));

  classInputBox.value = classesList.join(',')

  
  // window.getSelection().anchorNode.parentNode.classList.add('face');
});

// editor.addEventListener('mouseup', (e) => {
//   console.log(e, 'mouseup')
//   document.getElementById("sel").value = getSelectionText();
// });

// editor.addEventListener('keyup', (e) => {
//   console.log(e, 'keyup')
//   document.getElementById("sel").value = getSelectionText();
// });

// editor.addEventListener('selectionchange', (e) => {
//   console.log(e, 'selectionchange')
//   document.getElementById("sel").value = getSelectionText();
// });


console.log(editor);