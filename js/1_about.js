let weights = [];
let heights = [];
let species = [];
let abilities1 = [];
let abilities2 = [];
let abilities3 = [];
let selected = [];
let genderMales = [];
let genderFemales = [];
let eggGroup1 = [];
let eggGroup2 = [];


async function getDetailsFromUrls(i) {
    let response = await fetch(pokemonURLs[i]);
    let responseJSON = await response.json();
    
    let weight = responseJSON['weight']; weights.push(weight);
    let height = responseJSON['height']; heights.push(height);
    let specie = responseJSON['species']['name']; species.push(specie);

    let ab = responseJSON['abilities'];
    if (ab.length == 2) {
        let ab1 = responseJSON['abilities'][0]['ability']['name']; abilities1.push(ab1);
        let ab2 = responseJSON['abilities'][1]['ability']['name']; abilities2.push(ab2);
        abilities3.push('');
    }
    else if (ab.length == 1) {
        let ab1 = responseJSON['abilities'][0]['ability']['name']; abilities1.push(ab1);
        abilities2.push('');
        abilities3.push('');
    }
    else if (ab.length == 3) {
        let ab1 = responseJSON['abilities'][0]['ability']['name']; abilities1.push(ab1);
        let ab2 = responseJSON['abilities'][1]['ability']['name']; abilities2.push(ab2);
        let ab3 = responseJSON['abilities'][2]['ability']['name']; abilities3.push(ab3);
    }
    getBreedingStats(responseJSON);
    getBaseStatsFromUrls(responseJSON);
}


async function getBreedingStats(responseJSON) {
    let speciesURL = responseJSON['species']['url'];
    let responseSP = await fetch(speciesURL);
    let responseSP_JSON = await responseSP.json();

    let eggGroups = responseSP_JSON['egg_groups'];
    if (eggGroups.length == 2) {
        let egg_group_1 = responseSP_JSON['egg_groups'][0]['name']; eggGroup1.push(egg_group_1);
        let egg_group_2 = responseSP_JSON['egg_groups'][1]['name']; eggGroup2.push(egg_group_2);
    }
    else if (eggGroups.length == 1) {
        let egg_group_1 = responseSP_JSON['egg_groups'][0]['name']; eggGroup1.push(egg_group_1);
        eggGroup2.push('-');
    }
}


function aboutContent() {
    document.getElementById('content_details_bottom').innerHTML = /*html*/`
        <table class="details_table">
        <tr>
            <td style="color: grey">Species</td>
            <td>${capitalize(species[selected[0]])}</td>
        </tr>
        <tr>
            <td style="color: grey">Height</td>
            <td style="line-height: 90%;">${heights[selected[0]]/10}m / ${((heights[selected[0]]*3.937).toFixed(2)).replace('.',',')}inch</td>
        </tr>
        <tr>
            <td style="color: grey">Weight</td>
            <td style="line-height: 90%;">${weights[selected[0]]/10}kg / ${((weights[selected[0]]/4.536).toFixed(2)).replace('.',',')}lb </td>
        </tr>
        <tr>
            <td style="color: grey">Abilities</td>
            <td style="line-height: 90%;">${capitalize(abilities1[selected[0]])}</td>
        </tr>
        <tr>
        <td style="color: grey">Hidden Abilities&emsp;&emsp;</td>
        <td style="line-height: 90%;">${capitalize(abilities2[selected[0]])}&emsp;${capitalize(abilities3[selected[0]])}</td>
        </tr>
        <tr>
            <td style="color: grey">Egg Groups</td>
            <td>${capitalize(eggGroup1[selected[0]])}&emsp;${capitalize(eggGroup2[selected[0]])}</td>
        </tr>
        <tr>
            <td style="color: grey"></td>
            <td></td>
        </tr>
    </table>
`;
}