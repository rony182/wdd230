
const requestURL='https://rony182.github.io/wdd230/chamber/data.json';

const shops=document.querySelector('.shops');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    companies= jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(comp){
  let companie=document.createElement('section');
  let img=document.createElement('img');
  let h2=document.createElement('h2');
  let adress=document.createElement('p');
  let phone=document.createElement('p');
  let page=document.createElement('a');

  img.setAttribute('src', comp.img);
  img.setAttribute('alt', comp.name);
  img.setAttribute('width', 100);
  img.setAttribute('height', 100);

  h2.textContent=comp.name;
  adress.textContent=comp.address;
  phone.textContent=comp.phone;

  page.textContent=comp.site;
  page.setAttribute('href', comp.site);

  companie.appendChild(img);
  companie.appendChild(h2);
  companie.appendChild(adress);
  companie.appendChild(phone);
  companie.appendChild(page);


  shops.appendChild(companie);
  lazyload();
}

let gridBtn = document.querySelector("#gridMode");
let listBtn = document.querySelector("#listMode");
let onOff = document.querySelector("#on");

function resize() {
  if (window.innerWidth > 520 && window.innerWidth < 1021) {
    onOff.setAttribute("class", "list");
  } else {
    onOff.setAttribute("class", "grid");
  }
}
resize();
window.onresize = resize;

listBtn.addEventListener("click", () => {
  onOff.setAttribute("class", "list");
});
gridBtn.addEventListener("click", () => {
  onOff.setAttribute("class", "grid");
});

function lazyload() {
  let images = Array.from(document.querySelectorAll("img[data-src]"));
  const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.map((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });

    images.map((img) => {
      observer.observe(img);
    });
  } else {
    images.map((img) => {
      load(img);
    });
  }
}

