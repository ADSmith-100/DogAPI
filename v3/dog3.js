function getDogImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(fetchStatusHandler)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((e) =>
      alert("Breed not found or something else bad happened!  Try Again!")
    );
}

//possible to make the alert display the response status?  Different alert messages for different problems?
function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

function displayResults(responseJson) {
  console.log(responseJson);

  //replace the existing image with the new one
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let userBreed = $("#whatBreed").val();
    getDogImages(userBreed);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
