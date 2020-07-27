let loginButton = document.querySelector('.login-button');
let popUp = document.querySelector('.popup');

loginButton.addEventListener('click', showPopUop);

function showPopUop() {
	event.preventDefault();
	popUp.classList.toggle('visible');	
}