var mySwiper = new Swiper(".swiper-container", {
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
