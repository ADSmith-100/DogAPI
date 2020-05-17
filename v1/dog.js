"use strict";

function getDogImages() {
  const api = "https://dog.ceo/api/breeds/image/random/";
  let input = document.getElementById("howMany").value;
  let url = api + input;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

//function howMany() {
//const api = "https://dog.ceo/api/breeds/image/random/";
//let input = document.getElementById("howMany");
//let url = api + input;
//console.log(url);
//}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    getDogImages();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
