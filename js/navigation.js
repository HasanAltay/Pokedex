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
}


function scrollToTop() {
  let container = document.getElementById('box_expanding');
  container.scrollTo(0, 0);
}


function closeBrowserTab() {
  window.close('./index.html');
}