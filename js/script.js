'use strict';
let signupButton = document.querySelector('.signup-button');
let popUp = document.querySelector('.signup-popup');
let closeButton = document.querySelector('.signup-close');

signupButton.addEventListener('click', showPopUop);
closeButton.addEventListener('click', closePopUop);

function showPopUop(evt) {
	evt.preventDefault();
	popUp.classList.toggle('visible');	
}

function closePopUop() {
	popUp.classList.remove('visible');	
}