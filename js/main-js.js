/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";

	//Shrinking Nav
	$(window).scroll(function () {
		if ($(document).scrollTop() > 45) {
			$('.navbar').addClass('shrink');
		} else {
			$('.navbar').removeClass('shrink');
		}
	});

	//Top News Slider
	$('.slide-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		asNavFor: '.slide-nav'
	});
	$('.slide-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.slide-img',
		dots: false,
		focusOnSelect: true
	});

	//Spotlight Slider
	$('.spotlight-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		dots: true
	});

});
