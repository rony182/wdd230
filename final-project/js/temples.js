
const requestURL='https://rony182.github.io/wdd230/final-project/json/temples.json';

const temples=document.querySelector('.temples');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    templesO=jsonObject['temples'];
    templesO.forEach(displayTemples);
  });



function displayTemples(temp){
  let temple=document.createElement('section');
  let img=document.createElement('img');
  let h3=document.createElement('h3');
  let adress=document.createElement('p');
  let phone=document.createElement('p');
  let page=document.createElement('a');

  img.setAttribute('src', temp.img);
  img.setAttribute('alt', temp.name);
  img.setAttribute('width', 100);
  img.setAttribute('height', 100);

  h3.textContent=temp.name;
  adress.textContent=temp.address;
  phone.textContent=temp.phone;

  page.textContent=temp.site;
  page.setAttribute('href', temp.site);

  temple.appendChild(img);
  temple.appendChild(h2);
  temple.appendChild(adress);
  temple.appendChild(phone);
  temple.appendChild(page);


  temples.appendChild(companie);
  
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


