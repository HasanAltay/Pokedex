let sliderRange = [50];



function naviInvert() {
  document.getElementById('navi').style.backgroundColor = "unset";
}


function closeWindow() {
  let details = document.getElementById('details');
  let infos = document.getElementById('infos');
  let navi = document.getElementById('navi');
  infos.style.display = 'none';
  details.style.display = "none";
  navi.style.backgroundColor = "white";
}


function showInfos() {
  let infos = document.getElementById('infos');
  infos.style.display = 'flex';
  renderAbout();
  hideDropdown();
}


// function hideDropdown(){
//   let drop_down = document.getElementById('drop_down');
//   drop_down.classList.add("hidden");
// }


function scrollToTop() {
  let container = document.getElementById('box_expanding');
  container.scrollTo(0, 0);
}


function closeBrowserTab() {
  window.close('./index.html');
}


function addTitleItems() {
  document.getElementById('title').innerHTML = /*html*/`
  <div class="slidecontainer">
      <div class="slider_menu">
          <div class="slider_child">
          <a id="demo" class="demo"></a>
          <input type="range" min="50" max="600" step="1" 
            value="${sliderRange[0]}" id="myRange" class="slider">
          </div>
          <button class="quantity_btn" 
            onclick="quantity(sliderRange[0]); fetchLoader();"><b>Fetch!</b></button>
      </div>
  </div>
  `;

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; 
  // Display the default slider value
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
    sliderRange = [];
    sliderRange.push(output.innerHTML);
    output.innerHTML = slider.value;
    slider_position = slider.value - 50;
    output.style.left = `${(slider_position / 550) * 91.5}%`;

  }
  document.getElementById("loader_count").innerHTML = pokemonNames.length;
  document.getElementById("loader_counter_fetch").innerHTML = pokemonNames.length;
}


function sliderPositionCalibrate() {
  var output = document.getElementById("demo");
  slider_position = sliderRange[0]; 
  output.innerHTML = slider_position;
  output.style.left = `${((slider_position -50) / 550) * 91.5}%`;
  }


window.addEventListener('load', function() {
  addTitleItems(); 
});
