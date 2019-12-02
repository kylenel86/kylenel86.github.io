const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');
    let p1 = document.createElement('p');

    p1.textContent = towns[i].events;

    card.appendChild(p1);

    document.querySelector('div.local').appendChild(card);
    }
  });