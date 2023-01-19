let evolveSpecies1 = [];
let evolveSpecies2 = [];


async function getEvolutionDetails(responseSP_JSON) {
  let resource = responseSP_JSON['evolution_chain']['url'];

  //  handling missing data in a fetch request by using a try-catch block 
  //  and checking the response's status code
  try {
    const response = await fetch(resource);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (!data) {
      throw new Error("Missing data in response");
    }

    // process data here
      let evolve = data['chain']['evolves_to'][0]['evolves_to'];

      if (evolve.length == 1) {
        let evolve_species_1 = evolve[0]['species']['name']; 
          evolveSpecies1.push(evolve_species_1);
          evolveSpecies2.push(' ');
      }
      else if (evolve.length == 0) {
        evolveSpecies1.push('none');
      }
      else if (evolve.length == 2) {
        let evolve_species_1 = evolve[0]['species']['name']; 
          evolveSpecies1.push(evolve_species_1);
        let evolve_species_2 = evolve[1]['species']['name']; 
          evolveSpecies2.push(evolve_species_2);
      }

  } catch (error) {
    console.error(error);
    // handle error here, for example by displaying an error message to the user
  }
  // console.log(evolveSpecies);
  // console.log(evolveSpecies2);
  // console.log(evolve);
}


function evolutionContent() {

  let pokeEvolve1 = evolveSpecies1[selected[0]];
  let pokeEvolve2 = evolveSpecies2[selected[0]];

  document.getElementById('content_details_bottom').innerHTML = /*html*/`
    <div class="evo_main">

        <div class="evo_box"><h2>${capitalize(pokeEvolve1)}</h2></div>

        <div class="evo_box"><h2>${capitalize(pokeEvolve2)}</h2></div>


    </div>
  
  
  `
}