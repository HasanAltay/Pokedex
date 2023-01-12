let itemsQuantity = [50];
let resource = ['https://pokeapi.co/api/v2/pokemon?limit='+ itemsQuantity +'&offset=0'];
let pokemonNames = [];
let pokemonURLs = [];
let pokemonTypes1 = [];
let pokemonTypes2 = [];
let pokemonSprites = [];
let pokemonColor = [];
let sliderRange = [];


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
    let pokemonSprite = sprite['other']['dream_world']['front_default']
    console.log(pokemonSprite);
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
        <div class="counter" id="counter">#${i+1}</div>
        
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
        <h2>Pokedex (${pokemonNames.length} Items)</h2>
        <button class="quantity_btn" onclick="quantity(show)"><b>SHOW</b></button>
        <a id="demo"></a>
        <input type="range" min="50" max="600" step="10" value="50" id="myRange" class="slider">
    </div>
    <!-- <button class="quantity_btn" onclick="quantity(49)"><b>49</b></button>
    <button class="quantity_btn" onclick="quantity(199)"><b>199</b></button>
    <button class="quantity_btn" onclick="quantity(666)"><b>666</b></button> -->
    `;

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // var show = output.innerHTML;

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
        console.log(output.innerHTML);
    }

    sliderRange.push(output.innerHTML);
    console.log(slider[0]);



}


function goBack() {
    let details = document.getElementById('details');
    document.getElementById('navi_btn_1').style = "filter: invert(0)";
    document.getElementById('navi_btn_2').style = "filter: invert(0)";
    details.style.display = "none";
    document.getElementById('navi').style.backgroundColor = "white";
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