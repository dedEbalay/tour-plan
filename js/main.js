$(document).ready(function () {
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
			enabled: false,
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
			.classList.toggle("row__mobile--visible");
	});

	var modalButton = $("[data-toggle=modal]");
	modalButton.on("click", openModal);

	var closeButton = $(".modal__close");
	closeButton.on("click", closeModal);

	addEventListener("keyup", function (e) {
		if (e.keyCode === 27) {
			var modalClass = $(".modal");
			modalClass.removeClass("modal--visible");
		}
	});

	function openModal() {
		var modalClass = $(".modal");
		modalClass.addClass("modal--visible");
	}
	function closeModal() {
		event.preventDefault();
		var modalClass = $(".modal");
		modalClass.removeClass("modal--visible");
	}
	$(".form").each(function () {
		$(this).validate({
			messages: {
				name: {
					required: "Enter your name",
					minlength: "Your name must be longer then 2 symbols",
				},
				email: {
					required: "Please, enter your real email",
				},
				phone: {
					required: "Plese, enter your real phone number",
				},
			},
		});
	});
	AOS.init();
});
