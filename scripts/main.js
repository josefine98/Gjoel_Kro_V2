//Following code is from Alex's lecture 29/11

let headerElem = document.querySelector('header');
let menuElem = document.querySelector('#menu');
const strActive = 'opened';

menuElem.addEventListener('click', function(event){
	event.preventDefault();

  if (headerElem.className.indexOf('opened') === -1) {

    headerElem.classList.add(strActive);
    // Kryds ikon: Fontawesome https://fontawesome.com/v5.15/icons/times?style=solid 
    menuElem.innerHTML = '<i class="fas fa-times"></i>';
    
  } else {

    headerElem.classList.remove(strActive);
    //Burgermenu ikon: Fontawesome https://fontawesome.com/v5.15/icons/bars?style=solid
    menuElem.innerHTML = '<i class="fas fa-bars">';
  }
});