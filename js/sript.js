"use strict"


var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},


	// свободный режим
	freeMode: true,

	// управление колесо мыши
	mousewheel: {
		//Чувствителность колеса мыши
		sensitivity: 1,
	},


	spaceBetween: 5,
	loop: true,
	//автовысота слайдов 
	autoHeight: true,
	effect: "coverflow",
	grabCursor: true,

	coverflowEffect: {
		rotate: 30,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	slidesPerView: 1,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		426: {
			slidesPerView: 2,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 25,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 25,
		},
	},


});

//меню бургер (pc) 
const iconMenu = document.querySelector('.fixet__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__fixet');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock'); //что бы не скролилось  
		iconMenu.classList.toggle('_active');  //делаем активную кнопку ( сама иконка добовляем клас activ) 
		menuBody.classList.toggle('_active');
		const menuGod = document.querySelector('.shop');
		menuGod.classList.toggle('active');
		const logo = document.querySelector('.menu__logo ');
		logo.classList.toggle('logo-active');
		if (document.documentElement.classList.contains('class-open')) {
			const oneLink = document.querySelector('.phone-submenu');
			const oneBlock = document.querySelector('.sub-menu-open');
			oneBlock.classList.remove('sub-menu-open');
			oneLink.classList.remove('phone-submenu');
			document.documentElement.classList.remove('class-open');
		};


	})
}







//меню магазина
document.addEventListener("click", documentAction);
function documentAction(e) {
	const targetElement = e.target;
	if (targetElement.closest('[data-parent]')) {
		const submenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
		const subMenu = document.querySelector(`[data-submenu="${submenuId}"]`);
		if (subMenu) {
			const activeLink = document.querySelector('.sub-menu-active');
			const activBlock = document.querySelector('.sub-menu-open');
			targetElement.classList.toggle('sub-menu-active');
			subMenu.classList.toggle('sub-menu-open');
			if (activeLink && activeLink !== targetElement) {
				activeLink.classList.remove('sub-menu-active');
				activBlock.classList.remove('sub-menu-open');
			}
		} else {
			console.log('NOyyy');
		}
		e.preventDefault();
	};
	if (targetElement.closest('.header-submenu')) {
		const catalolSubLink = targetElement.closest('.header-submenu');
		document.documentElement.classList.add('class-open');
		catalolSubLink.classList.toggle('phone-submenu');
		e.preventDefault();
	};
	if (targetElement.closest('.sub-menu-catalog__sumbit')) {
		const button = targetElement.closest('.sub-menu-catalog__sumbit');
		button.classList.toggle('back');
		document.querySelector('.sub-menu-active') ? document.querySelector('.sub-menu-active').classList.remove('sub-menu-active') : null;
		document.querySelector('.sub-menu-open') ? document.querySelector('.sub-menu-open').classList.remove('sub-menu-open') : null;
		document.querySelector('.phone-submenu') ? document.querySelector('.phone-submenu').classList.remove('phone-submenu') : null;


	};
};
