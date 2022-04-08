
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



function displayCompanies(temp){
  let temple=document.createElement('section');
  let img=document.createElement('img');
  let h3=document.createElement('h3');
  let adress=document.createElement('a');
  let phone=document.createElement('a');
  let email=document.createElement('a');
  let services=document.createElement('p');
  let history=document.createElement('p');
  let ordinances=document.createElement('p');
  let session=document.createElement('p');
  let closure=document.createElement('p');
  let div1=document.createElement('div');
  let div2=document.createElement('div');
  let div3=document.createElement('div');
  let div4=document.createElement('div');
  let div5=document.createElement('div');
  let h4=document.createElement('h4');
  let h41=document.createElement('h4');
  let h42=document.createElement('h4');
  let h43=document.createElement('h4');
  let h44=document.createElement('h4');
  let btn=document.createElement('button');
  btn.setAttribute('class','like-btn');
  btn.textContent='1F44D Like';
  img.setAttribute('src', temp.img);
  img.setAttribute('alt', temp.name);


  h3.textContent=temp.name;
  adress.textContent=temp.address;
  phone.textContent=temp.phone;
  email.textContent=temp.email;
  email.setAttribute('href', temp.email);
  h4.textContent='Services';
  services.textContent=temp.services;
  h41.textContent='History';
  history.textContent=temp.history;
  h42.textContent='Temple Ordinances';
  ordinances.textContent=temp.ordinances;
  h43.textContent='Sessions';
  session.textContent=temp.session;
  h44.textContent='Closure Periods';
  closure.textContent=temp.closure;

  temple.appendChild(img);
  temple.appendChild(btn);
  temple.appendChild(h3);
  temple.appendChild(adress);
  temple.appendChild(phone);
  temple.appendChild(email);
  temple.appendChild(div1);
  div1.appendChild(h4);
  div1.appendChild(services);
  temple.appendChild(div2);
  div2.appendChild(h41);
  div2.appendChild(history);
  temple.appendChild(div3);
  div3.appendChild(h42);
  div3.appendChild(ordinances);
  temple.appendChild(div4);
  div4.appendChild(h43);
  div4.appendChild(session);
  temple.appendChild(div5);
  div5.appendChild(h44);
  div5.appendChild(closure);


  shops.appendChild(temple);
  
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


