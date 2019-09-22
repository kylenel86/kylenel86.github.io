var lastupdate = document.lastModified;
var lu = document.querySelector(".lastupdate");
lu.innerHTML = lastupdate;

var currentyear = new Date().getFullYear();
var cy = document.querySelector(".currentyear");
cy.innerHTML = currentyear;
