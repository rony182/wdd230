const input = document.getElementById('favchap');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
btn.addEventListener('click', function() {
  let createList = input.value;
  if (createList !==''){
    const newLI = document.createElement('li');
    const newBTN = document.createElement('button');
    newLI.textContent = createList;
    newBTN.innerHTML='\u274C';
    newBTN.ariaLabel = "Erase chapter"
    newLI.appendChild(newBTN);
  list.appendChild(newLI);
  input.value='';
  newBTN.onclick = function() {
    list.removeChild(newLI);
  }
  input.focus();
  }
});