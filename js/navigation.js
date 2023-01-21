let sliderRange = [50];


function showDropDown() {
  let drop_down = document.getElementById('drop_down');
  let drop_down_back = document.getElementById('drop_down_back');

  if (drop_down.style.display == 'none') {
    drop_down.style.display = 'flex';
  } 
  else if (drop_down.style.display = 'flex') {
    drop_down.style.display = 'none';
  }
  if (drop_down_back.style.display == 'none') {
    drop_down_back.style.display = 'flex';
  } 
  else if (drop_down_back.style.display === 'flex') {
    drop_down_back.style.display = 'none';
  }
}


function naviInvert() {
  // document.getElementById('navi_btn_1').style = "filter: invert(1)";
  // document.getElementById('navi_btn_2').style = "filter: invert(1)";
  document.getElementById('navi').style.backgroundColor = "unset";
}


function goBack() {
  let details = document.getElementById('details');
  // document.getElementById('navi_btn_1').style = "filter: invert(0)";
  // document.getElementById('navi_btn_2').style = "filter: invert(0)";
  details.style.display = "none";
  document.getElementById('navi').style.backgroundColor = "white";
}


function showInfos() {
 let infos = document.getElementById('infos');
 infos.style.display = 'flex';
}


function closeInfos() {
  let infos = document.getElementById('infos');
  infos.style.display = 'none';
}


function scrollToTop() {
  $("#box_expanding").animate({ scrollTop: 0 }, "fast");
}