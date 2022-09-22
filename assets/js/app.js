const charactersDiv = document.getElementById("characters-container");

//to fetch the character data from API server
async function bringCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character"); //API fetch and await response
  const characters = await response.json();
  console.log(characters);
  console.log(characters.results[0].name); //to print the character data.

  printCharacter(characters.results);
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
