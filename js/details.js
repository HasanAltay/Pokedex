function openDetails(i) {
    selected = [];
    selected.push(i);
    let details = document.getElementById('details');
    details.style.display = "block";
    let boxColor = document.getElementById('box'+ i).style.backgroundColor;
    document.getElementById('details').innerHTML = /*html*/ `
    <div class="details_background" id="details_bg">
                <div class="details_top_frame" id="details_top">
                    <div class="details_infos">
                        <div class="details_title">
                            <span>${capitalize(pokemonNames[i])}</span>
                            <div class="counter_details" id="counter">#${i+1}</div>
                        </div>
                        <div class="flex">
                            <div class="details_abilities">
                                <div id="ability1" class="ab_details">${capitalize(pokemonTypes1[i])}</div>   
                            </div>
                            <div class="details_abilities">
                                <div id="ability2" class="ab_details">${capitalize(pokemonTypes2[i])}</div>
                                <div class="ab_details"></div>
                            </div>
                        </div>
                        <div class="center">
                            <img class="details_poke_img" src="${pokemonSprites[i]}">
                            <img class="details_ball_box" src="./img/pokeball.webp">
                        </div>   
                    </div>
                </div>
                <div class="details_bottom_frame" id="details_bottom">
                </div>
            </div>
    `;
    document.getElementById('details_bg').style.backgroundColor = boxColor;
    naviInvert();
    about();
}


function about() {
    document.getElementById('details_bottom').innerHTML = /*html*/`
        <div class="specs_navi">
            <span onclick="about()" id="about" style="border-bottom: blue solid"><b>About</b></span>
            <span onclick="base(),baseContent()" id="base" style="color: grey">Base Stats</span>
            <span onclick="evolution(),evolutionContent()" id="evolution" style="color: grey">Evolution</span>
            <!-- <span onclick="moves()" id="moves" style="color: grey">Moves</span> -->
        </div>
        <div id="content_details_bottom"></div>
    `;
    aboutContent(selected[0]);
}


function base() {
    document.getElementById('details_bottom').innerHTML = /*html*/`
    <div class="specs_navi">
        <span onclick="about()" id="about" style="color: grey">About</span>
        <span onclick="base(),baseContent()" id="base" style="border-bottom: blue solid"><b>Base Stats</b></span>
        <span onclick="evolution(),evolutionContent()" id="evolution" style="color: grey">Evolution</span>
        <!-- <span onclick="moves()" id="moves" style="color: grey">Moves</span> -->
    </div>
    <div id="content_details_bottom"></div>
`;
}


function evolution() {
    document.getElementById('details_bottom').innerHTML = /*html*/`
    <div class="specs_navi">
        <span onclick="about()" id="about" style="color: grey">About</span>
        <span onclick="base(),baseContent()" id="base" style="color: grey">Base Stats</span>
        <span onclick="evolution(),evolutionContent()" id="evolution" style="border-bottom: blue solid"><b>Evolution</b></span>
        <!-- <span onclick="moves()" id="moves" style="color: grey">Moves</span> -->
    </div>
    <div id="content_details_bottom"></div>
`;
}


// function moves() {
//     document.getElementById('details_bottom').innerHTML = /*html*/`
//     <div class="specs_navi">
//         <span onclick="about()" id="about" style="color: grey">About</span>
//         <span onclick="base(),baseContent()" id="base" style="color: grey">Base Stats</span>
//         <span onclick="evolution(),evolutionContent()" id="evolution" style="color: grey">Evolution</span>
//         <span onclick="moves()" id="moves" style="border-bottom: blue solid"><b>Moves</b></span>
//     </div>
//     <div id="content_details_bottom"></div>
// `;
// }


