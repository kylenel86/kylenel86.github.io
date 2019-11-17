const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {

    if(towns[i].name == "Preston" ||  towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
        {

      

        let card = document.createElement("section");
        let span = document.createElement("span");
        let h2 = document.createElement("name");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement ("p");
        let photo = document.createElement("img");
    
        

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Current Population:' + ' ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;


        card.appendChild(span);
        span.appendChild(h2);
        span.appendChild(motto);
        span.appendChild(yearFounded);
        span.appendChild(currentPopulation);
        span.appendChild(averageRainfall);
        card.appendChild(photo);
        


        photo.setAttribute('src', 'images/' + towns[i].photo); 
        photo.setAttribute('alt', towns[i].name);

        
        document.querySelector('span.towns').appendChild(card);
    }
  }
});