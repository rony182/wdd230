//Let's store the resource, the URL of the JSON file into a const variable to start.//

const requestURL= 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// We will use a basic fetch() method and feed it the required argument, 
// the URL and use the .then() method that returns a Promise which response 
//we will work with as an argument to an anonymous function. 
//We need to extract the JSON content from the noise of the full HTTP 
//response by using the json() method. The second .then() method 
//is then setup for us to work with the converted response data 
//in JavaScript object format.  Initially we will test to see if we get a valid,
// parsed response using a console.table() method to output the results to the console.

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


function displayProphets(prophet) {
  let card=document.createElement('section');
  let h2 = document.createElement('h2');
  let img =document.createElement('img');
  let birthd = document.createElement('p');
  let bplace = document.createElement('p');

  h2.textContent= `${prophet.name} ${prophet.lastname}`;
  birthd.textContent= `Date of Birth: ${prophet.birthdate}`;
  bplace.textContent= `Place of Birth: ${prophet.birthplace}`;
  img.setAttribute('src', prophet.imageurl);
  img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

  card.appendChild(h2);
  card.appendChild(birthd);
  card.appendChild(bplace);
  card.appendChild(img);

  document.querySelector('div.cards').appendChild(card);

}