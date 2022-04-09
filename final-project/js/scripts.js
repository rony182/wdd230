document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;



function toggleMenu() {
  
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburguerButton').classList.toggle('open');
}
const x=document.getElementById('hamburguerButton');
x.onclick=toggleMenu;
