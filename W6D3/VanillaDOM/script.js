document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });




  // adding SF places as list items

  const submitNewPlace = (event) => {
    event.preventDefault();

    console.log("hello");

    const place = document.querySelector(".favorite-input").value;
    document.querySelector(".favorite-input").value = "";

    const ul = document.getElementById("sf-places");
    console.log(place);
    const li = document.createElement("li");
    li.textContent= place;

    ul.appendChild(li);
  };
  const submitFave = document.querySelector(".favorite-submit");
    submitFave.addEventListener("click", submitNewPlace);


  // adding new photos
  const togglePhotoForm = (e) => {
    const div = document.querySelector("div.photo-form-container");
    if (div.className === "photo-form-container hidden") {
      div.className = "photo-form-container";
    } else {
      div.className = "photo-form-container hidden";
    }
  };

  document.querySelectorAll("button.photo-show-button").forEach((button) => {
    button.addEventListener("click", togglePhotoForm);
  });
  const submitNewPhoto = (event) => {
    event.preventDefault();

    const pic = document.querySelector(".photo-url-input").value;
    document.querySelector(".photo-url-input").value = "";

    const newImg = document.createElement("img");
    newImg.src = pic;
    const ul = document.querySelector(".dog-photos");
    console.log(pic);
    const li = document.createElement("li");
    li.appendChild(newImg);

    ul.appendChild(li);
  };

  const submitPhoto = document.querySelector(".photo-url-submit");
    submitPhoto.addEventListener("click", submitNewPhoto);

  // --- your code here!



});
