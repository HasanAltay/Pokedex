const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;

function openDetails(i) {
    selected = [];
    selected.push(i);
    let details = document.getElementById("details");
    details.style.display = "block";
    let boxColor = document.getElementById("box" + i).style.backgroundColor;
    document.getElementById("details").innerHTML = /*html*/ `
        <div class="details_background" id="details_bg">
            <div class="details_top_frame" id="details_top">
                <div class="details_infos">
                    <div class="details_title">
                        <span>${capitalize(pokemonNames[i])}</span>
                        <div class="counter_details" id="counter">#${(i + 1)
            .toString()
            .padStart(3, "0")}</div>
                    </div>
                    <div class="flex">
                        <div class="details_abilities">
                            <div id="ability1" class="ab_details">${capitalize(
                pokemonTypes1[i]
            )}</div>   
                        </div>
                        <div class="details_abilities">
                            <div id="ability2" class="ab_details">${capitalize(
                pokemonTypes2[i]
            )}</div>
                            <div class="ab_details"></div>
                        </div>
                    </div>
                    <div class="center">
                        <div id="poke_img_hd"></div>
                        <img class="details_ball_box" src="./img/pokeball.webp">
                    </div>   
                </div>
            </div>
            <div class="details_bottom_frame" id="details_bottom">
            </div>
        </div>
        <div class="left_right_navigation" id="left_right_navigation">
            <button onkeypress="" onclick="showNextOrPrevious(${i-1})"><img class="left_btn" src="./img/up-arrow.png"></button>
            <button onclick="showNextOrPrevious(${i+1})"><img class="right_btn" src="./img/up-arrow.png"></button>
        </div
    `;
    document.getElementById("details_bg").style.backgroundColor = boxColor;
    document.getElementById("navi_btn_1").style.visibility = "visible";
    document.getElementById("left_right_navigation").style.visibility = "visible";
    naviInvert();
    about();
    getHDSprite(i);
}

function showNextOrPrevious(i) {
    let shownItems = itemsQuantity[0];
    if (i == -1) {
        i = shownItems -1;
    }
    if (i == shownItems) {
        i = 0;
    }
    openDetails(i);
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == LEFT_ARROW_KEYCODE) {
        let current = selected[0];
        let previous = current == 0 ? itemsQuantity[0] - 1 : current - 1;
        showNextOrPrevious(previous);
    } else if (event.keyCode == RIGHT_ARROW_KEYCODE) {
        let current = selected[0];
        let next = current == itemsQuantity[0] - 1 ? 0 : current + 1;
        showNextOrPrevious(next);
    }
});

async function getHDSprite(i) {
    let response = await fetch(pokemonURLs[i]);
    let responseJSON = await response.json();
    let sprite = responseJSON["sprites"];
    let pokemonSpriteHD = sprite["other"]["dream_world"]["front_default"];
    document.getElementById("poke_img_hd").innerHTML = `
    <img class="details_poke_img" src="${pokemonSpriteHD}">
    `;
}

function about() {
    document.getElementById("details_bottom").innerHTML = /*html*/ `
        <div class="specs_navi">
            <span onclick="about()" id="about" style="border-bottom: blue solid"><b>About</b></span>
            <span onclick="base(),baseContent()" id="base" style="color: grey">Base Stats</span>
            <span onclick="evolution(),displayEvolutionChain()" id="evolution" style="color: grey">Evolution</span>
        </div>
        <div id="content_details_bottom"></div>
    `;
    aboutContent(selected[0]);
}

function base() {
    document.getElementById("details_bottom").innerHTML = /*html*/ `
    <div class="specs_navi">
        <span onclick="about()" id="about" style="color: grey">About</span>
        <span onclick="base(),baseContent()" id="base" style="border-bottom: blue solid"><b>Base Stats</b></span>
        <span onclick="evolution(),displayEvolutionChain()" id="evolution" style="color: grey">Evolution</span>
    </div>
    <div id="content_details_bottom"></div>
`;
}

function evolution() {
    document.getElementById("details_bottom").innerHTML = /*html*/ `
    <div class="specs_navi">
        <span onclick="about()" id="about" style="color: grey">About</span>
        <span onclick="base(),baseContent()" id="base" style="color: grey">Base Stats</span>
        <span onclick="evolution(),displayEvolutionChain()" id="evolution" style="border-bottom: blue solid"><b>Evolution</b></span>
    </div>
    <div id="content_details_bottom"></div>
`;
}
