const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',




	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},


	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1400: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1028: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 1,
			spaceBetween: 20,
		}
	}



});