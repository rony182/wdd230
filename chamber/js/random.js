const jsonUrl = 'https://rony182.github.io/wdd230/chamber/data.json';

fetch(jsonUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const cos = jsonObject["companies"];

    let spotlights = cos.filter(getSpotlight);
    showSpotlight(spotlights)
  });
function getSpotlight(spot){
  if (spot.level === 'Gold' | spot.level === 'Silver'){
    return spot
  }
}
function showSpotlight(arr){
  for (let i = 1; i < 4; i++){
    let spotImg = document.querySelector(`#sp${i} img`)
    let spotName = document.querySelector(`#sp${i} h2`)
    let email = document.querySelector(`#sp${i}-email`)
    let phone = document.querySelector(`#sp${i}-phone`)

    let index = ~~(Math.random()*arr.length)   
    spotImg.src = arr[index].img 
    spotImg.setAttribute('alt', arr[index].name)
    spotName.textContent = arr[index].name
    email.textContent = arr[index].site
    phone.textContent = arr[index].phone

    arr = arr.filter((item) => {
      return item != arr[index]
    })
  }
}
