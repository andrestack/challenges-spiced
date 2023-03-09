const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
// ↙️
async function checkIfApiIsAvailable() {
  /**
   * Hint 1:
   * Use the `fetch()` function and pass the `apiStatusUrl` into it
   *
   * Hint 2:
   * The fetch function returns a promise which resolves to a Response
   * object once it is ready.
   *
   * Hint 3:
   * The Response object has a `ok` property which is true if the response
   * is okay and false if it is not.
   **/
  // --v-- write your code here --v--

  fetch(apiStatusUrl).then((response) => {
    if (response.ok) {
      icon.textContent = "✅";
    } else {
      icon.innerText = "❌";
    }
  }).catch(error); {
    icon.innerText= "❌"};
//try
  // const response = await fetch(apiStatusUrl);
  // if (response.ok) {
  //   icon.textContent = "✅";
  // } else {
  //   icon.textContent = "❌";
}

// --^-- write your code here --^--

button.addEventListener("click", () => {
  checkIfApiIsAvailable();
  icon.textContent = "⏳";
});
