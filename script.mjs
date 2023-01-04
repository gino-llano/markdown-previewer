const editorContainer = document.querySelector('#editor-container');
const editorBtn = document.querySelector('#editor-container .btn');
const editor = document.querySelector('#editor');
const previewContainer = document.querySelector('#preview-container');
const previewBtn = document.querySelector('#preview-container .btn');
const preview = document.querySelector('#preview');

const icons = ['bi-arrows-fullscreen', 'bi-fullscreen-exit'];
let indexEditor = 0;
let indexPreview = 0;

editorBtn.addEventListener('click', updateEditorSize);

function updateEditorSize()
{
  editor.classList.toggle('full-screen');
  indexEditor = (indexEditor + 1) % 2;
  editorBtn.innerHTML = '<i class="bi ' + icons[indexEditor] + '"></i>';

  previewContainer.classList.toggle('hidden');
}

previewBtn.addEventListener('click', updatePreviewSize);

function updatePreviewSize()
{
  preview.classList.toggle('full-screen');
  indexPreview = (indexPreview + 1) % 2;
  previewBtn.innerHTML = '<i class="bi ' + icons[indexPreview] + '"></i>';

  editorContainer.classList.toggle('hidden');
}

editor.addEventListener('change', updatePreview);


function updatePreview(event)
{
  let input = event.target.value; 
  input = input.replace(/\n/g, '  \n'); 
  input = marked.parse(input);
  preview.innerHTML = input;
}

addEventListener('load', initialize);
function initialize()
{
  const editorHTML =
  '# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == \'```\' && lastLine == \'```\') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)';

  editor.innerHTML = editorHTML;
  preview.innerHTML = marked.parse(editorHTML.replace(/\n/g, '  \n'));

}