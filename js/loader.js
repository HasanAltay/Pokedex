function loader() {
  let loader = document.getElementById('loader');
  let loader_count = document.getElementById('loader_count');
  let box_top = document.getElementById('box_top');
  let box_bottom = document.getElementById('box_bottom');
  let background_gradient = document.getElementById('background_gradient');
  let background_white = document.getElementById('background_white');
  let box_counter = document.getElementById('box_counter');

  loader.style.display = 'flex';
  loader_count.style.animationPlayState = 'running';

  let startPageLoadingInterval = setInterval(() => {
      if (pokemonNames.length == sliderRange[0]) {

      setTimeout(() => {
        box_top.style.animationPlayState = 'running';
        box_bottom.style.animationPlayState = 'running';
        loader_count.style.animationIterationCount = 'inherit';
      }, 2000);

      setTimeout(() => {
        loader_count.style.animationPlayState = 'paused';
        background_white.style.animationPlayState = 'running';
        box_counter.style.animationPlayState = 'running';
      }, 1900);

      setTimeout(() => {
        background_gradient.style.animationPlayState = 'running';
      }, 2400);

      setTimeout(() => {
        box_top.style.animationPlayState = 'running';
        loader.style.display = 'none';
        loader_count.style.animationPlayState = 'paused';
      }, 6000);

      }    
  }, 100);
  clearLoaderIntervals(startPageLoadingInterval);
}


function fetchLoader() {

  let fetch_loader = document.getElementById('fetch_loader');
  let loader_counter_fetch = document.getElementById('loader_counter_fetch');
  let pokeball_loader = document.getElementById('pokeball_loader');

  fetch_loader.style.display = 'flex';
  loader_counter_fetch.style.animationPlayState = 'running';
  pokeball_loader.style.animationPlayState = 'running';

  let fetchLoadingInterval = setInterval(() => {
    if (pokemonNames.length == sliderRange[0]) {
      loader_counter_fetch.style.animationIterationCount = 'inherit';
      loader_counter_fetch.style.animationPlayState = 'paused';
      pokeball_loader.style.animationIterationCount = 'inherit';

      setTimeout(() => {
        loader_counter_fetch.style.animationPlayState = 'paused';
        pokeball_loader.style.animationPlayState = 'paused';
        fetch_loader.style.display = 'none';
      }, 1600);
  
    }    
}, 100);
clearLoaderIntervals(fetchLoadingInterval);
}


function clearLoaderIntervals(intervals) {
  setTimeout(() => {
    clearInterval(intervals); 
   }, 7000);

}