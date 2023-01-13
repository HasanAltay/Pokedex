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
    drop_down_back.style.display = 'block';
  } 
  else if (drop_down_back.style.display = 'block') {
    drop_down_back.style.display = 'none';
  }
}