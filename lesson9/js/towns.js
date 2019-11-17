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

      //let creates variables in this html tag document. the document is the web page we are referencing here in this case, the weather page index.html where we have referenced this js file

        let card = document.createElement("section");
        let span = document.createElement("span");
        let h2 = document.createElement("name");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement ("p");
        let photo = document.createElement("img");
    
        
      //here we are calling out what we created in let, similiar to the idea of calling by id or class.  textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements. 
      

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Current Population:' + ' ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;

//        birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;


        // Here we are putting a tag inside another tog, we are putting the span inside of the card and above we have called the card a section.

        card.appendChild(span);
        span.appendChild(h2);
        span.appendChild(motto);
        span.appendChild(yearFounded);
        span.appendChild(currentPopulation);
        span.appendChild(averageRainfall);
        card.appendChild(photo);
        

        //can set class id language Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value. To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().

        photo.setAttribute('src', 'images/' + towns[i].photo); 
        photo.setAttribute('alt', towns[i].name);

        //I am taking all the spans I created above and putting them in .towns span
        document.querySelector('span.towns').appendChild(card);
    }
  }
});