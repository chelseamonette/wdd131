// Footer dynamics
var d0 = new Date();
document.getElementById("year").innerHTML = d0.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

