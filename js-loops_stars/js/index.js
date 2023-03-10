console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i < 6; i++) {
    if (i >= filledStars) {
      // image.setAttribute("src", "./assets/star-filled.svg");
      image.setAttribute("src", "./assets/star-empty.svg");
    } else {
      // image.setAttribute("src", "./assets/star-empty.svg");
      image.setAttribute("src", "./assets/star-filled.svg");
    }
    starContainer.addEventListener("click", () => {
      renderStars(i);
    });
    let image = document.createElement("img");
    starContainer.append(image);
  }
  //--^-- your code here --^--
}

renderStars(0);
