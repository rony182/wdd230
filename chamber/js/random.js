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
    // arr.splice(arr.length-1)
  }
}




// //--- HOME SPOTLIGHT --- //
// const companiesURL = 'https://rony182.github.io/wdd230/chamber/data.json';
// const spot1name = document.querySelector("#spot1-name");
// const spot1img = document.querySelector("#sp1-img");
// const spot1email = document.querySelector("#sp1-email");
// const spot1phone = document.querySelector("#sp1-phone");

// const spot2name = document.querySelector("#spot2-name");
// const spot2img = document.querySelector("#sp2-img");
// const spot2email = document.querySelector("#sp2-email");
// const spot2phone = document.querySelector("#sp2-phone");

// fetch(companiesURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject); // temporary checking for valid response and data parsing
//     const companies = jsonObject["companies"];
//     let sortedCompanies = companies.sort(function () {
//       return 0.5 - Math.random();
//     });
//     sortedCompanies.forEach(SpotlightCompanies);
//   });

// let goldMembers = {};
// let silverMembers = {};

// function SpotlightCompanies(company) {
//   //Create list of gold members
//   if (company.level == "Gold") {
//     Object.assign(goldMembers, company);
//   }

//   //Create list of silver members
//   if (company.level == "Silver") {
//     Object.assign(silverMembers, company);
//   }

//   // Display gold member to spotlight1 section
//   spot1name.textContent = goldMembers.name;
//   spot1img.setAttribute("src", goldMembers.logo);
//   spot1img.setAttribute("alt", `Logo - ${goldMembers.name}`);
//   spot1img.setAttribute("loading", "lazy");
//   spot1email.textContent = goldMembers.email;
//   spot1phone.textContent = goldMembers.phone;

//   // Display silver member to spotlight2 section
//   spot2name.textContent = silverMembers.name;
//   spot2img.setAttribute("src", silverMembers.logo);
//   spot2img.setAttribute("alt", `Logo - ${silverMembers.name}`);
//   spot2img.setAttribute("loading", "lazy");
//   spot2email.textContent = silverMembers.email;
//   spot2phone.textContent = silverMembers.phone;
// }
