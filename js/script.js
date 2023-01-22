let itemsQuantity = [50];
let resource = ['https://pokeapi.co/api/v2/pokemon?limit='+ itemsQuantity +'&offset=0'];
let pokemonNames = [];
let pokemonURLs = [];
let pokemonTypes1 = [];
let pokemonTypes2 = [];
let pokemonSprites = [];
let pokemonColor = [];


async function render() {
    let response = await fetch(resource);
    let responseJSON = await response.json();
    let datasheet = responseJSON['results'];
    for (let i = 0; i < datasheet.length; i++) {
        let pokeName = datasheet[i]['name'];
        let pokeURL = datasheet[i]['url'];
        addToArrays(pokeName, pokeURL);
        await getInfosFromUrls(i);
        addBoxes(i);
    }
}


function addToArrays(pokeName, pokeURL) {
    pokemonNames.push(pokeName);
    pokemonURLs.push(pokeURL);
}


async function getInfosFromUrls(i) {
    let response = await fetch(pokemonURLs[i]);
    let responseJSON = await response.json();
    let datasheet = responseJSON['types'];
    if (datasheet.length == 2) {
        let pokeType1 = datasheet[0]['type']['name'];
        let pokeType2 = datasheet[1]['type']['name'];
        pokemonTypes1.push(pokeType1);
        pokemonTypes2.push(pokeType2);
    }
    else if (datasheet.length == 1) {
        let pokeType1 = datasheet[0]['type']['name'];
        pokemonTypes1.push(pokeType1);
        pokemonTypes2.push('');
    }
    let sprite = responseJSON['sprites'];
    let pokemonSprite = sprite['other']['dream_world']['front_default'];
    pokemonSprites.push(pokemonSprite);
    getDetailsFromUrls(i);
}


function addBoxes(i) {
    let content = document.getElementById('content');
    content.innerHTML += /*html*/ `
    <div class="box" id="box${i}" onclick="openDetails(${i})">
        <img class="poke_img" src="${pokemonSprites[i]}">
        <b class="poke_names">${capitalize(pokemonNames[i])}</b>
        <div id="ability1" class="ability-style">${capitalize(pokemonTypes1[i])}</div>
        <div id="ability2" class="ability-style">${capitalize(pokemonTypes2[i])}</div>
        <div class="counter" id="counter">#${(i + 1).toString().padStart(3, '0')}</div>
        <img class="ball_box" src="./img/pokeball.webp">
    </div>
    `;
    boxColor(pokemonTypes1, i);
    addTitleItems();
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function addTitleItems() {
    document.getElementById('title').innerHTML = /*html*/`
    <div class="slidecontainer">
        <!-- <img class="pokedex_logo" src="./img/poke_logo.png" alt="Pokedex-Logo"> -->
        <!-- <div class="dflex"><h2>Pokédex&nbsp;&nbsp;</h2><h3>(${pokemonNames.length} Items)</h3></div> -->
        <div class="slider_menu">
            <a id="demo"></a>
            <input type="range" min="50" max="600" step="10" value="${sliderRange[0]}" id="myRange" class="slider">
            <button class="quantity_btn" onclick="quantity(sliderRange[0]); fetchLoader()"><b>Fetch!</b></button>
        </div>
    </div>
    `;
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
        sliderRange = [];
        sliderRange.push(output.innerHTML);
        console.log(sliderRange[0]);
    }
    document.getElementById("loader_count").innerHTML = pokemonNames.length;
    document.getElementById("loader_counter_fetch").innerHTML = pokemonNames.length;
}


function quantity(q) {
    let content = document.getElementById('content');
    content.innerHTML = '';
    pokemonNames = [];
    pokemonURLs = [];
    pokemonTypes1 = [];
    pokemonTypes2 = [];
    pokemonSprites = [];
    pokemonColor = [];    
    itemsQuantity = [];
    resource = [];
    itemsQuantity.push(q);
    resource = ['https://pokeapi.co/api/v2/pokemon?limit='+ itemsQuantity +'&offset=0'];
    render();
}
