var today = new Date()
// Array to assign days of week to the weekday
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
// Var months with array for assigned Months in place of digit
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var day = weekday[today.getDay()];
var dd =  today.getDate()
var mm = months[today.getMonth()];
var year = today.getFullYear();

today = " " + day + ", " + dd + " " + mm + " " + year;
document.getElementById("todaysDate").innerHTML = today;