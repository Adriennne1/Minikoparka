//======================= cookie ====================================
const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-btn');

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie');

	if (cookieEaten) {
		cookieBox.classList.add('hiden');
	}
};

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true');
	cookieBox.classList.add('hiden');
};

cookieBtn.addEventListener('click', handleCookieBox);
showCookie();