let itemsQuantity = [50];
let resource = [
    "https://pokeapi.co/api/v2/pokemon?limit=" + itemsQuantity + "&offset=0",
];
let pokemonNames = [];
let pokemonURLs = [];
let pokemonTypes1 = [];
let pokemonTypes2 = [];
let pokemonSprites = [];
let pokemonColor = [];

function searchTasks() {
    const searchInput = document.querySelector(".search_bar input");
    // Event listener for search bar input changes
    searchInput.addEventListener("input", searchTasks);
    const filter = searchInput.value.toUpperCase();
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const poke_names = box
            .querySelector("#poke_names")
            .textContent.toUpperCase();
        const ability1 = box
            .querySelector("#ability1")
            .textContent.toUpperCase();
        const ability2 = box
            .querySelector("#ability2")
            .textContent.toUpperCase();
        const counter = box.querySelector("#counter").textContent.toUpperCase();

        if (
            poke_names.indexOf(filter) > -1 ||
            ability1.indexOf(filter) > -1 ||
            ability2.indexOf(filter) > -1 ||
            counter.indexOf(filter) > -1
        ) {
            box.style.display = "";
        } else {
            box.style.display = "none";
        }
    });
}

async function render() {
    let response = await fetch(resource);
    let responseJSON = await response.json();
    let datasheet = responseJSON["results"];
    for (let i = 0; i < datasheet.length; i++) {
        let pokeName = datasheet[i]["name"];
        let pokeURL = datasheet[i]["url"];
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
    let datasheet = responseJSON["types"];
    if (datasheet.length == 2) {
        let pokeType1 = datasheet[0]["type"]["name"];
        let pokeType2 = datasheet[1]["type"]["name"];
        pokemonTypes1.push(pokeType1);
        pokemonTypes2.push(pokeType2);
    } else if (datasheet.length == 1) {
        let pokeType1 = datasheet[0]["type"]["name"];
        pokemonTypes1.push(pokeType1);
        pokemonTypes2.push("");
    }
    let sprite = responseJSON["sprites"];
    let pokemonSprite = sprite["other"]["dream_world"]["front_default"];
    pokemonSprites.push(pokemonSprite);
    getDetailsFromUrls(i);
}

function addBoxes(i) {
    let content = document.getElementById("content");
    content.innerHTML += /*html*/ `
    <div class="box" id="box${i}" onclick="openDetails(${i})">
        <img class="poke_img" src="${pokemonSprites[i]}">
        <b id="poke_names" class="poke_names">${capitalize(pokemonNames[i])}</b>
        <div id="ability1" class="ability-style">${capitalize(
            pokemonTypes1[i]
        )}</div>
        <div id="ability2" class="ability-style">${capitalize(
            pokemonTypes2[i]
        )}</div>
        <div class="counter" id="counter">#${(i + 1)
            .toString()
            .padStart(3, "0")}</div>
        <img class="ball_box" src="./img/pokeball.webp">
    </div>
    `;
    boxColor(pokemonTypes1, i);
    addTitleItems();
    sliderPositionCalibrate();
    searchTasks();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function quantity(q) {
    let content = document.getElementById("content");
    content.innerHTML = "";
    pokemonNames = [];
    pokemonURLs = [];
    pokemonTypes1 = [];
    pokemonTypes2 = [];
    pokemonSprites = [];
    pokemonColor = [];
    itemsQuantity = [];
    resource = [];
    itemsQuantity.push(q);
    resource = [
        "https://pokeapi.co/api/v2/pokemon?limit=" +
            itemsQuantity +
            "&offset=0",
    ];
    render();
}
