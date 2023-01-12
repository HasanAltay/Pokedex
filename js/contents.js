let hps = [];
let attacks = [];
let defenses = [];
let spAtks = [];
let spDefs = [];
let speeds = [];
let totals = [];


async function getBaseStatsFromUrls(i) {
    let response = await fetch(pokemonURLs[i]);
    let responseJSON = await response.json();
    let hp = responseJSON['stats'][0]['base_stat']; hps.push(hp);
    let attack = responseJSON['stats'][1]['base_stat']; attacks.push(attack);
    let defense = responseJSON['stats'][2]['base_stat']; defenses.push(defense);
    let spAtk = responseJSON['stats'][3]['base_stat']; spAtks.push(spAtk);
    let spDef = responseJSON['stats'][4]['base_stat']; spDefs.push(spDef);
    let speed = responseJSON['stats'][5]['base_stat']; speeds.push(speed);
    let total = hp + attack + defense + spAtk + spDef + speed; totals.push(total);
}


function aboutContent() {
    document.getElementById('content_details_bottom').innerHTML = /*html*/`
    <table>
        <tr>
            <td style="color: grey">Species</td>
            <td>${capitalize(species[selected[0]])}</td>
        </tr>
        <tr>
            <td style="color: grey">Height</td>
            <td>${heights[selected[0]]} dm (decimetres)</td>
        </tr>
        <tr>
            <td style="color: grey">Weight</td>
            <td>${weights[selected[0]]} hg (hectograms)</td>
        </tr>
        <tr>
            <td style="color: grey">Abilities&emsp;&emsp;&emsp;</td>
            <td>${capitalize(abilities1[selected[0]])}&emsp;${capitalize(abilities2[selected[0]])}&emsp;${capitalize(abilities3[selected[0]])}</td>
        </tr>
        <!-- <tr>
            <td class="padding"><b>Breeding&emsp;&emsp;&emsp; </b></td>
            <td></td>
        </tr>
        <tr>
            <td style="color: grey">Gender</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="color: grey">Egg Groups</td>
            <td></td>
        </tr>
        <tr>
            <td style="color: grey">Egg Cycle</td>
            <td></td>
        </tr> -->
    </table>
`;
}


function baseContent() {
    document.getElementById('content_details_bottom').innerHTML = /*html*/`
    <table>
        <tr>
            <td style="color: grey">HP</td>
            <td style="text-align:right">${hps[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${hps[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Attack</td>
            <td style="text-align:right">${attacks[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${attacks[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Defense</td>
            <td style="text-align:right">${defenses[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${defenses[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Sp.Atk</td>
            <td style="text-align:right">${spAtks[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${spAtks[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Sp.Def</td>
            <td style="text-align:right">${spDefs[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${spDefs[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Speed</td>
            <td style="text-align:right">${speeds[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${speeds[selected[0]]}%"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="color: grey">Total</td>
            <td style="text-align:right">${totals[selected[0]]}</td>
            <td class="bar_width">
                <div class="bar_background">
                    <div class="bars" style="width: ${totals[selected[0]]*100/600}%"></div>
                </div>
            </td>
        </tr>
    </table>
`;
}