var hotelSwiper = new Swiper(".swiper-container", {
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},

	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button--next",
		prevEl: ".swiper-button--prev",
	},
});

var rewiesSwiper = new Swiper(".rewies-swiper", {
	keyboard: {
		enabled: true,
	},
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".rewies-swiper-button__next",
		prevEl: ".rewies-swiper-button__prev",
	},
});

var mobileButton = document.querySelector(".adaptive-button");
mobileButton.addEventListener("click", function () {
	document
		.querySelector(".row--bottom")
		.classList.toggle("row--bottom__mobile--visible");
});
