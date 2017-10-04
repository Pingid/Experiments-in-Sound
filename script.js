// DOM interaction
function setupButtons(ids) {
  return ids.map(id => document.getElementById(id).addEventListener('click', () => buttonClick(id)))
}
setupButtons(['btn1', 'btn2', 'btn3']);

function buttonClick() {}
