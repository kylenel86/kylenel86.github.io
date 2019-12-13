const requestURL = 'https://kylenel86.github.io/lesson13/templeclosure.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const templeclosure = jsonObject["closure dates"];

for (let i = 0; i < templeclosure.length; i++ ) {

    if (templeclosure[i].name == "Los Angeles California" || templeclosure[i].name == "Newport Beach California" || templeclosure[i].name == "Redlands California" || templeclosure[i].name == "San Diego California")

    let closure = document.createElement("h4");
   
    heading.textContent = 'Temple Closure Dates';
    events.textContent = templeclosure[i].closure;

    fillCard.appendChild(heading);
    fillCard.appendChild(even);
    card.appendChild(fillCard);
    
    document.querySelector('div.templecl').appendChild(card);
}
});