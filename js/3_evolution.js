let evolveSpecies1 = [];
let evolveSpecies2 = [];

async function displayEvolutionChain() {
    let content_details_bottom = document.getElementById(
        "content_details_bottom"
    );
    content_details_bottom.innerHTML = /*html*/ `
    <div id="evolution_container" class="evolution_container"></div>
  `;
    let responseURL = await fetch(pokemonURLs[selected[0]]);
    let responseJSON = await responseURL.json();
    let speciesURL = responseJSON["species"]["url"];
    let responseSP = await fetch(speciesURL);
    let responseSP_JSON = await responseSP.json();

    let resource = responseSP_JSON["evolution_chain"]["url"];
    const response = await fetch(resource);
    const data = await response.json();
    let evolutionChain = data["chain"];

    // Create a stack to hold the evolutions that need to be displayed
    let evolutionStack = [
        {
            pokemon: evolutionChain.species,
            evolves_to: evolutionChain.evolves_to,
        },
    ];

    while (evolutionStack.length > 0) {
        let current = evolutionStack.pop();

        let currentPokemon = current.pokemon;
        let evolutionName = currentPokemon.name;
        let evolutionId = currentPokemon.url.split("/")[6];
        let evolutionSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionId}.png`;

        // create the div container for the current Pokemon
        let parent = document.getElementById("evolution_container");
        let div = document.createElement("div");
        div.innerHTML =
            `<img src="${evolutionSprite}" alt="${evolutionName}">` +
            `<p>${capitalize(evolutionName)}</p>`;
        parent.appendChild(div);

        // check if there are more evolutions in the chain
        let evolutionDetails = current.evolves_to;
        if (evolutionDetails.length > 0) {
            for (let i = 0; i < evolutionDetails.length; i++) {
                let nextPokemon = evolutionDetails[i].species;
                let nextEvolutions = evolutionDetails[i].evolves_to;

                // Add the next evolution(s) to the stack
                evolutionStack.push({
                    pokemon: nextPokemon,
                    evolves_to: nextEvolutions,
                });
            }
        }
    }
}
