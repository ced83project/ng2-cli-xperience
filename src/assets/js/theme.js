/*!
 * Outdoor eXperience v1.0.0 
 * Copyright 2016
 *
 */
                  
jQuery(document).ready(function($) {

    // ---------- Video
    //$('.video').click(function(){this.paused?this.play():this.pause();});
    
    // ---------- Parallax Effect
    //$('#header').css({'background-image': 'url(./img/irt/montagne_mafate18_lever_du_soleil_-_CREDIT_IRT_-_frog_974_photographies_dts_12_2017.jpg'});
    //$('#header-img-1').css({'background-image': 'url(./img/carousel/montagne_mafate18_lever_du_soleil_-_CREDIT_IRT_-_frog_974_photographies_dts_12_2017.jpg'});
    //$('#header-img-2').css({'background-image': 'url(./img/carousel/montagne_piton_des_neiges09_commerson_au_dessus_des_nuages_-_CREDIT_IRT_-_frog_974_photographies_dts_07_2018.jpg'});
    //$('#header-img-3').css({'background-image': 'url(./img/carousel/montagne_salazie41_-_CREDIT_IRT_-_dronecopters_dts_06_2018.jpg'});
    
    //$('#header').parallax("100%", 0.3);
    
    // ---------- Cut Effect
    //$('section .cut').each(function() {
		//	if ($(this).hasClass('cut-top'))
		//		$(this).css('border-right-width', $(this).parent().width() + "px");
		//	else if ($(this).hasClass('cut-bottom'))
		//		$(this).css('border-left-width', $(this).parent().width() + "px");
		//});
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    
});


