const charactersDiv = document.getElementById("characters-container");
const previousPage = document.getElementById("previous-page");
const nextPage = document.getElementById("next-page");

const nextPageButtons = document.getElementsByClassName("next-page-buttons");
const previousPageButtons = document.getElementsByClassName(
  "previous-page-buttons"
);

//to fetch the character data from API server
async function bringCharacters() {
  let pageCounter = 1;

  const characters = await apiRequest(pageCounter);
  printCharacter(characters.results);

  Array.from(nextPageButtons).forEach((button) => {
    button.addEventListener("click", async () => {
      pageCounter = pageCounter + 1;
      const characters = await apiRequest(pageCounter);
      printCharacter(characters.results);
    });
  });

  Array.from(previousPageButtons).forEach((button) => {
    button.addEventListener("click", async () => {
      pageCounter = pageCounter - 1;
      const characters = await apiRequest(pageCounter);
      printCharacter(characters.results);
    });
  });
}

bringCharacters();

function printCharacter(characters) {
  const list = characters.map((character) => {
    return `<div class="card ${character.status}" >
      <img src="${character.image}"/>
      <div class="text">
        <h1>${character.name}</h1> 
        <ul>
            <li>${character.origin.name}</l1> 
            <li>${character.species}</li>
        </ul>
      </div>
      </div>`; //to print the character description
  });

  if (characters.status === "Dead") {
  }
  charactersDiv.innerHTML = list.join(""); //optional: <h1>${personajes[1].name}</h1>
}

async function apiRequest(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  ); //API fetch and await response
  const characters = await response.json();
  return characters;
}
