let loginButton = document.querySelector('.login-button');
let popUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopUop);

function showPopUop(evt) {
	evt.preventDefault();
	popUp.classList.toggle('visible');	
}