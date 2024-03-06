// ============================ lightbox big images ==================================
// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);


//==========================gallery small image ===================================
// Select relevant HTML elements
const filterButtons = document.querySelectorAll('#filter-buttons button');
const filterableCards = document.querySelectorAll('#filterable-cards .card');

// Function to filter cards based on filter buttons
const filterCards = (e) => {
	document.querySelector('#filter-buttons .active').classList.remove('active');
	e.target.classList.add('active');

	filterableCards.forEach((card) => {
		// show the card if it matches the clicked filter or show all cards if "all" filter is clicked
		if (
			card.dataset.name === e.target.dataset.filter ||
			e.target.dataset.filter === 'all'
		) {
			return card.classList.replace('hide', 'show');
		}
		card.classList.add('hide');
	});
};

filterButtons.forEach((button) =>
	button.addEventListener('click', filterCards)
);

// Open the Modal
function openModal() {
	document.getElementById('myModal').style.display = 'block';
}

// Close the Modal
function closeModal() {
	document.getElementById('myModal').style.display = 'none';
}

var slideImage  = 1;
showSlides(slideImage);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideImage += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideImage = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('demo');
	var captionText = document.getElementById('caption');
	if (n > slides.length) {
		slideImage = 1;
	}
	if (n < 1) {
		slideImage = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideImage - 1].style.display = 'block';
	dots[slideImage - 1].className += ' active';
	captionText.innerHTML = dots[slideImage - 1].alt;
}


// ============================ lightbox big images ==================================
// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};

