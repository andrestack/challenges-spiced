console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.results;
    console.log(characters[2].eye_color);
  } catch (error) {
    console.error("ALARM");
  }
}

fetchData();
