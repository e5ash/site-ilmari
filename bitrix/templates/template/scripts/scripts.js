$(document).ready(function() {
	/* Sliders */
	$('.products__list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 10000
	});

	$('.advantages__nav').slick({
		slidesToShow: 4,
		arrows: false,
		asNavFor: '.advantages__slider',
		focusOnSelect: true
	});

	$('.advantages__slider').slick({
		asNavFor: '.advantages__nav'
	});

	$('.window__nav').slick({
		arrows: false,
		slidesToShow: 4,
		asNavFor: '.window__slider',
		focusOnSelect: true
	});

	$('.window__slider').slick({
		asNavFor: '.window__nav'
	});

	$('.portfolio__nav').slick({
		slidesToShow: 4,
		arrows: false,
		asNavFor: '.portfolio__slider',
		focusOnSelect: true
	});

	$('.certificates__list').slick({
		slidesToShow: 3
	});

	$('.reviews__list').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true
	});

	
	$('.portfolio__slider').slick({
		asNavFor: '.portfolio__nav'
	});

	$('.portfolio__images').slick({
		slidesToShow: 4,
		arrows: false,
		focusOnSelect: true
	});

	function fadeInPopup(friend) {
		friend.show(500);
	}

	var inputCount = 0;
	$('.button-send').click(function() {
		var parent = $(this).parents('.step'),
			friend = parent.siblings(),
			form = $(this).parents('.form-wrap'),
			inputs = form.find('.input-requred');

		inputCount = 0;

		inputs.each(function() {
			if ($(this).val() == "") {
				$(this).addClass('input-error')
				inputCount--;
			}
			else{
				$(this).removeClass('input-error')
				inputCount++;
			}
		});

		if(inputCount == 1){
			parent.hide(0);
			friend.show(0);
		}
	});

	$('.portfolio__slider-content').slick({
		arrows: false,
		swipe: false
	});







	/* Mask input */
	$(".input-phone").mask("8 (999) 999 99 99");



	/* Status bar */
	$('.status__bar').each(function() {
		var count = $(this).attr('data-status'),
			block = $(this).find('div');
		block.css('width', count + '%');
	});




	/* Select product */
	var chooseNameClass = 'choose__item_select';
	$('.choose__item').each(function() {
		var group = $(this).attr('data-group'),
			count = $(this).attr('data-choose');
		if ($(this).hasClass(chooseNameClass)) {
			$('.choose__image > div[data-group=' + group +'][data-choose=' + count + ']').show();
		}
	});
	$('.choose__item').click(function() {
		var group = $(this).attr('data-group'),
			count = $(this).attr('data-choose');
		$('.choose__list .choose__item[data-group=' + group +']').removeClass(chooseNameClass);
		$('.choose__list .choose__item[data-group=' + group +'][data-choose=' + count + ']').addClass(chooseNameClass);
		$('.choose__image > div[data-group=' + group +']').hide();
		$('.choose__image > div[data-group=' + group +'][data-choose=' + count + ']').show();
	});



	/* Callback */
	$('.callback').click(function() {
		ZCallbackWidget.showCallback();
	});



	/* Nav anchor */
	$('.nav').liLanding({
		speedFactor: 1
	});
});