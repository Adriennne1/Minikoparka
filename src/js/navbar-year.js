//========================navbar and year in footer ==================

const navBtn = document.querySelector('.navbar-toggler');
const navLink = document.querySelectorAll('.nav-link');
const navBg = document.querySelector('.navbar-nav');
const footerYear = document.querySelector('.footer__year');
const buttonUp = document.getElementById('myBtn');

const handleNav = () => {
	navBg.classList.toggle('active');
	navBtn.classList.toggle('active');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navBtn.addEventListener('click', handleNav);
navBg.addEventListener('click', handleNav);
