/** ===================================================================
 * main js*/ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
$(window).load(function() {
    $("#loader").fadeOut("slow", function(){
        $("#preloader").delay(300).fadeOut("slow");
	});       
})

/*-FitText Settings ------------------------------------------------------ */
setTimeout(function() {
	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
}, 100);

/* FitVids ------------------------------------------------------ */ 
$(".fluid-video-wrapper").fitVids();
	/*--/* Owl Carousel------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
			[0, 1],
			[700, 2],
			[960, 3]
		],
        navigationText: false
    });

	/*- Alert Boxes------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
		$(this).parent().fadeOut(500);
	});	


	/*--- Stat Counter ------------------------------------------------------- */
	var statSection = $("#stats"),
		stats = $(".stat-count");

statSection.waypoint({
	handler: function(direction) {
		if (direction === "down") {       		
			stats.each(function () {
				var $this = $(this);
				
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 4000,
					easing: 'swing',
					step: function (curValue) {
						$this.text(Math.ceil(curValue));
					}
				});
			});
		} 
		this.destroy();      	
	},		
	offset: "90%"	
});	

	/*--Masonry ------------------------------------------------------ */
var containerProjects = $('#folio-wrapper');
containerProjects.imagesLoaded( function() {
	containerProjects.masonry( {		  
		itemSelector: '.folio-item',
			resize: true 
		});
	});

	/*--Modal Popup------------------------------------------------------*/
$('.item-wrap a').magnificPopup({
    type:'inline',
    fixedContentPos: false,
    removalDelay: 300,
    showCloseBtn: false,
    mainClass: 'mfp-fade'
});

$(document).on('click', '.popup-modal-dismiss', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});

	/*-Navigation Menu ------------------------------------------------------ */  
var toggleButton = $('.menu-toggle'),
nav = $('.main-navigation');
	// toggle button
toggleButton.on('click', function(e) {
	e.preventDefault();
	toggleButton.toggleClass('is-clicked');
	nav.slideToggle();
});

// nav items
nav.find('li a').on("click", function() {   
	// update the toggle button 		
	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
	nav.fadeOut();   		   	     
});

/*--Highlight the current section in the navigation bar ------------------------------------------------------ */
var sections = $("section"),
navigation_links = $("#main-nav-wrap li a");	
sections.waypoint( {
	handler: function(direction) {
		var active_section;
			active_section = $('section#' + this.element.id);
			if (direction === "up") active_section = active_section.prev();
			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		}, 
		offset: '25%'
	});

	/*--Smooth Scrolling------------------------------------------------------ */
$('.smoothscroll').on('click', function (e) {	 	
	e.preventDefault();
	var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
			'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
		window.location.hash = target;
    });
});  

	/*--  Placeholder Plugin Settings ------------------------------------------------------ */ 
$('input, textarea, select').placeholder()  
/*--contact form ------------------------------------------------------ */
	/* local validation */
	$('#contactForm').validate({
		/* submit via ajax */
		submitHandler: function(form) {
			var sLoader = $('#submit-loader');
			$.ajax({      	
				type: "POST",
				url: "inc/sendEmail.php",
				data: $(form).serialize(),
				beforeSend: function() { 
					sLoader.fadeIn(); 
				},
				success: function(msg) {
	            	// Message was sent
					if (msg == 'OK') {
						sLoader.fadeOut(); 
						$('#message-warning').hide();
						$('#contactForm').fadeOut();
						$('#message-success').fadeIn();   
					}
	            	// There was an error
					else {
						sLoader.fadeOut(); 
						$('#message-warning').html(msg);
						$('#message-warning').fadeIn();
					}
				},
			error: function() {
				sLoader.fadeOut(); 
				$('#message-warning').html("Something went wrong. Please try again.");
				$('#message-warning').fadeIn();
			}
		});     		
	}
});
/* Back to top ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);

const card = document.querySelector('.container');
const description = document.getElementById('description');
const description1 = document.getElementById('description1');
const changeTextButton = document.getElementById('changeTextButton');
const themeToggleButton = document.getElementById('themeToggleButton');
const body = document.body;

const text1 = "Estudiante de Ingeniería";
const text2 = "Clerigo En Formación ACC";
const text3 = "Practicante en IBM";
const text4 = "Amante del arte";

let isText1 = true;
let isText2 = true;

if (card) {
    window.addEventListener('load', () => {
        card.classList.add('highlight');

        card.addEventListener('animationend', () => {
            card.classList.remove('highlight');
        });
    });
}

if (changeTextButton) {
    changeTextButton.addEventListener('click', () => {
        if (description) {
            description.textContent = isText1 ? text3 : text1;
            isText1 = !isText1;
        }
        if (description1) {
            description1.textContent = isText2 ? text4 : text2;
            isText2 = !isText2;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
	const secondarycolorPicker = document.getElementById('secondary-color-picker');

	const colorBox = document.querySelector('.color-box');
    const applyColorButton = document.getElementById('apply-color');

    applyColorButton.addEventListener('click', () => {
        const selectedColor = colorPicker.value;
		const selectedColor2 = secondarycolorPicker.value;

		if (confirm('¿Estás seguro de que quieres aplicar este color a los elementos?')) {
			colorBox.style.backgroundColor = selectedColor;
			colorBox.style.color = selectedColor2;

			document.querySelectorAll('h2, h3, h4, h5, h6').forEach(el => {
				el.style.color = selectedColor;
			});

			document.querySelectorAll('.services-list .icon i').forEach(icon => {
				icon.style.color = selectedColor;
			});

			const goTopBtn = document.querySelector('#go-top a');
			goTopBtn.style.backgroundColor = selectedColor;

			const styleTag = document.getElementById('dynamic-menu-colors') || document.createElement('style');
			styleTag.id = 'dynamic-menu-colors';
			styleTag.innerHTML = `

				#go-top a,
				.main-navigation li a ,
				.intro-social li a, 
				.intro-social li a:visited, 
				.footer-social li a, 
				.footer-social li a:visited{
					color: #fff !important;
				}
				.menu-toggle.is-clicked span {
					background-color: rgba(255, 0, 119, 0) !important;
				}

				.button.stroke:hover {
					border: 3px solid ${selectedColor} !important;
					color: ${selectedColor} !important;
				}
				.main-navigation li a:hover,
				.intro-social li a:hover, 
				.footer-social li a:hover, 
				a{
					color: ${selectedColor} !important;
				}

				.owl-theme .owl-controls .owl-page.active span,
				.menu-toggle span, 
				.menu-toggle span::before,
				.menu-toggle span::after,
				.popup-modal .link-box a:hover,
				#go-top a:hover,
				.skill-bars li .progress {
					background-color: ${selectedColor2} !important;
				}
				a:visited {
					color: ${selectedColor2} !important;
				}
			`;

			if (!document.getElementById('dynamic-menu-colors')) {
				document.head.appendChild(styleTag);
			}

			document.querySelectorAll('.services-list .icon i').forEach(icon => {
				icon.style.color = selectedColor;
			});
		}
	});
});

/* ==========explicacion de que se usa cada parte del css al reaccionar por el cambio del usuario=================
.owl-theme .owl-controls .owl-page.active span
	Apartado de pagina en la seccion de servicios
		(background-color)

.menu-toggle span 
	Barra de menú centra
		(background-color)

.menu-toggle span::before 
	Barra de menú central
		(background-color)

.menu-toggle span::after 
	Barra de menú central
		(background-color)

.popup-modal .link-box a:hover
	Fondo Boton de sección dentro de foto
		(background-color)

#go-top a:hove
	Fondo botón al seleccionar para subir
		(background-color)

.button.stroke:hover
	Borde y letra de botones
		(border: 3px solid #color !important; % color)

.main-navigation li a:hover
	Color al pasar el mouse en alguna opción del menú
		(color)

.intro-social li a:hover, .footer-social li a:hover
	Color al pasar el mouse en alguna red social del intro
		(color)

a:visited
	Color del enlace 
		(color)

#go-top a
	color flecha del botón para subir
		(color)

.main-navigation li a, 
	.intro-social li a, 
	.intro-social li a:visited, 
	.footer-social li a, 
	.footer-social li a:visited
		Color base del menú (blanco)
			color

.menu-toggle.is-clicked span
	Pasar a transparente para menú cuando se selecciona
		background-color: rgba(255, 0, 119, 0) !important;
*/

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500); // Retardo de animación (opcional)
    });
});
