const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const towns = jsonObject["towns"];

for (let i = 0; i < towns.length; i++ ) {

    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let motto = document.createElement("h3");
    let founded = document.createElement("p");
    let population = document.createElement("p");
    let rain = document.createElement("p");
    let image = document.createElement("img");

    if (towns[i].name == "Fish Haven" ||towns[i].name == "Soda Springs" || towns[i].name== "Preston")

   { h2.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
    population.textContent = 'Population: ' + towns[i].currentPopulation;
    rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + '"';
   
    image.setAttribute('src', 'images/' + towns[i].photo);
    image.setAttribute('alt', towns[i].name);
    
    card.appendChild(h2);
    card.appendChild(motto);
    card.appendChild(founded);
    card.appendChild(population);
    card.appendChild(rain);
    card.appendChild(image);
  
    document.querySelector('div.towns').appendChild(card);
   }
   
  
    
}
});