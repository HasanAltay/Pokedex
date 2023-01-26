let evolveSpecies1 = [];
let evolveSpecies2 = [];

let evolutionNames = [];
let evolutionIds = [];
let evolutionSprites = [];
let nextPokemons = [];


function evolutionContent() {

  const nextPokemon = nextPokemons[selected[0]];
  // let nextPokemon = evolutionDetails[i]['species'];
  let nextName = nextPokemon['name'];                   
  let nextId = nextPokemon['url'].split("/")[6];
  let nextSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nextId}.png`;
  
  evolutionNames.push(nextName);  
  evolutionIds.push(nextId);  
  evolutionSprites.push(nextSprite);  

  let content_details_bottom = document.getElementById('content_details_bottom');
  content_details_bottom.innerHTML = /*html*/`
    <div>${evolutionNames}</div>
    <div>${evolutionIds}</div> 
    <div>${evolutionSprites}</div>  
    `
}


async function displayEvolution(responseSP_JSON) {

    let resource = responseSP_JSON['evolution_chain']['url'];
    const response = await fetch(resource);
    const data = await response.json();
    let evolutionData = data['chain'];

    let currentPokemon = evolutionData['species'];
    let evolutionName = currentPokemon['name'];
    let evolutionId = currentPokemon['url'].split("/")[6];
    let evolutionSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionId}.png`;

    let evolutionDetails = evolutionData['evolves_to'];
    let evolutionNames = [evolutionName];
    let evolutionIds = [evolutionId];
    let evolutionSprites = [evolutionSprite];

    // check if there are more evolutions in the chain
    if(evolutionDetails.length > 0) {
        for (let i = 0; i < evolutionDetails.length; i++) {
            let nextPokemon = evolutionDetails[i]['species'];
            let nextName = nextPokemon['name'];                   
            let nextId = nextPokemon['url'].split("/")[6];
            let nextSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nextId}.png`;


            nextPokemons.push(nextPokemon);

            evolutionDetails = evolutionDetails[i]['evolves_to'];
        }
    }
    else {
      nextPokemons.push('No Evolution Chain!');
    }
}




async function displayEvolutionChain() {

  let content_details_bottom = document.getElementById('content_details_bottom');
  content_details_bottom.innerHTML = /*html*/`
    <div id="evolution_container" class="evolution_container"></div>
    `

  let responseURL = await fetch(pokemonURLs[selected[0]]);
  let responseJSON = await responseURL.json();
  let speciesURL = responseJSON['species']['url'];
  let responseSP = await fetch(speciesURL);
  let responseSP_JSON = await responseSP.json();
  
  let resource = responseSP_JSON['evolution_chain']['url'];
  const response = await fetch(resource);
  const data = await response.json();
  let evolutionChain = data['chain'];
  
  let currentPokemon = evolutionChain['species'];
  let evolutionName = currentPokemon['name'];
  let evolutionId = currentPokemon['url'].split("/")[6];
  let evolutionSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionId}.png`;

  // create the div container for the current Pokemon
  let parent = document.getElementById("evolution_container");
  let div = document.createElement("div");
  div.innerHTML = `<img src="${evolutionSprite}" alt="${evolutionName}">` + `<p>${capitalize(evolutionName)}</p>`;
  parent.appendChild(div);
  let evolutionDetails = evolutionChain['evolves_to'];

  // check if there are more evolutions in the chain
  if(evolutionDetails.length > 0) {
      for (let i = 0; i < evolutionDetails.length; i++) {

          let nextPokemon = evolutionDetails[i]['species'];
          let nextName = nextPokemon['name'];
          let nextId = nextPokemon['url'].split("/")[6];
          let nextSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nextId}.png`;

          // create the div container for the next evolution
          let nextDiv = document.createElement("div");
          nextDiv.innerHTML = `<img src="${nextSprite}" alt="${nextName}">` + `<p>${capitalize(nextName)}</p>`;
          parent.appendChild(nextDiv);
          evolutionDetails = evolutionDetails[i]['evolves_to'];
      }
  }
}