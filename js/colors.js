function boxColor(pokemonTypes1, i) {
    if (pokemonTypes1[i] == "fire") {
        document.getElementById("box" + i).style.backgroundColor = "#DB8711";
    } else if (pokemonTypes1[i] == "grass") {
        document.getElementById("box" + i).style.backgroundColor = "#E15D58";
    } else if (pokemonTypes1[i] == "water") {
        document.getElementById("box" + i).style.backgroundColor = "#8080FA";
    } else if (pokemonTypes1[i] == "electric") {
        document.getElementById("box" + i).style.backgroundColor = "#EAD900";
    } else if (pokemonTypes1[i] == "bug") {
        document.getElementById("box" + i).style.backgroundColor = "#A5C000";
    } else if (pokemonTypes1[i] == "normal") {
        document.getElementById("box" + i).style.backgroundColor = "#A5AC70";
    } else if (pokemonTypes1[i] == "flying") {
        document.getElementById("box" + i).style.backgroundColor = "#AC81FA";
    } else if (pokemonTypes1[i] == "poison") {
        document.getElementById("box" + i).style.backgroundColor = "#962BA8";
    } else if (pokemonTypes1[i] == "psychic") {
        document.getElementById("box" + i).style.backgroundColor = "#E2568D";
    } else if (pokemonTypes1[i] == "rock") {
        document.getElementById("box" + i).style.backgroundColor = "#AFA700";
    } else if (pokemonTypes1[i] == "ground") {
        document.getElementById("box" + i).style.backgroundColor = "#D5C754";
    } else if (pokemonTypes1[i] == "dark") {
        document.getElementById("box" + i).style.backgroundColor = "#6A5A46";
    } else if (pokemonTypes1[i] == "ghost") {
        document.getElementById("box" + i).style.backgroundColor = "#714E9E";
    } else if (pokemonTypes1[i] == "steel") {
        document.getElementById("box" + i).style.backgroundColor = "#BAB5D3";
    } else if (pokemonTypes1[i] == "fighting") {
        document.getElementById("box" + i).style.backgroundColor = "#AC3627";
    } else if (pokemonTypes1[i] == "ice") {
        document.getElementById("box" + i).style.backgroundColor = "#A9D7D9";
    } else if (pokemonTypes1[i] == "dragon") {
        document.getElementById("box" + i).style.backgroundColor = "#7C00FF";
    } else if (pokemonTypes1[i] == "fairy") {
        document.getElementById("box" + i).style.backgroundColor = "#BA0087";
    }
}
