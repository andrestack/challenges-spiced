console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i < 6; i++){
    let image = document.createElement("img");
    // image.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(image);
    
    
    if (filledStars === i[i]){
      image.setAttribute("src", "./assets/star-empty.svg");
      
    } else {
      
      image.setAttribute("src","./assets/star-filled.svg");
    }

   }
  //--^-- your code here --^--
}

renderStars(1);
