const requestURL = 'https://kylenel86.github.io/lesson13/templeclosure.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const templeclosure = jsonObject["closure dates"];

for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name== "Los Angeles California"){

    let closure dates = document.createElement("h4");
   
    heading.textContent = 'Local Events';
    events.textContent = towns[i].events;

    fillCard.appendChild(heading);
    fillCard.appendChild(events);
    card.appendChild(fillCard);
    
    document.querySelector('div.fishhavensevents').appendChild(card);
   }
}
});