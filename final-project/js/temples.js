
const requestURL='https://rony182.github.io/wdd230/final-project/temples.json';

const shops=document.querySelector('#temples');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    companies= jsonObject['temples'];
    companies.forEach(displayCompanies);
  });



function displayCompanies(comp){
  let companie=document.createElement('section');
  let img=document.createElement('img');
  let h3=document.createElement('h3');
  let adress=document.createElement('p');
  let phone=document.createElement('p');
  let page=document.createElement('a');

  img.setAttribute('src', comp.img);
  img.setAttribute('alt', comp.name);
  img.setAttribute('width', 100);
  img.setAttribute('height', 100);

  h3.textContent=comp.name;
  adress.textContent=comp.address;
  phone.textContent=comp.phone;

  page.textContent=comp.site;
  page.setAttribute('href', comp.site);

  companie.appendChild(img);
  companie.appendChild(h3);
  companie.appendChild(adress);
  companie.appendChild(phone);
  companie.appendChild(page);


  shops.appendChild(companie);
  
}
// let gridBtn = document.querySelector("#gridMode");
// let listBtn = document.querySelector("#listMode");
// let onOff = document.querySelector("#on");

// function resize() {
//   if (window.innerWidth > 559 && window.innerWidth < 1028) {
//     onOff.setAttribute("class", "list");
//   } else {
//     onOff.setAttribute("class", "grid");
//   }
// }
// resize();
// window.onresize = resize;

// listBtn.addEventListener("click", () => {
//   onOff.setAttribute("class", "list");
// });
// gridBtn.addEventListener("click", () => {
//   onOff.setAttribute("class", "grid");
// });


