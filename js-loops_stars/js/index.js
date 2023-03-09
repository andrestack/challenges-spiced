console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  starContainer.addEventListener("click", () => renderStars(5));

  for (let i = 1; i < 6; i++) {
    let image = document.createElement("img");
    starContainer.append(image);

    if (i > filledStars) {
      image.setAttribute("src", "./assets/star-filled.svg");
      // image.setAttribute("src", "./assets/star-empty.svg");
    } else {
      image.setAttribute("src", "./assets/star-empty.svg");
      //   image.setAttribute("src", "./assets/star-filled.svg");
    }
  }
  //--^-- your code here --^--
}
