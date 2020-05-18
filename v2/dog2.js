"use strict";

function getDogImages(num) {
  if (num < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      .then((responseJson) => displayResults(responseJson))
      .catch((error) => alert("Something went wrong. Try again later."));
  } else if (num > 50) {
    return alert("Please choose a number equal to or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then((response) => response.json())
      .then((responseJson) => displayResults(responseJson))
      .catch((error) => alert("Something went wrong. Try again later."));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //clears results section
  $(".results").html("");
  // take every image from the response message array and append a new image to the .results section
  responseJson.message.forEach((renderedImg) => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let userNum = $("#howMany").val();
    getDogImages(userNum);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
