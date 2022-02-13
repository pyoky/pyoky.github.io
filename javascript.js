

function showImages(elems, rel) {
    var windowHeight = jQuery( window ).height();
    elems.each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - windowHeight * rel > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// image fade-in
$(window).scroll(function() {
    showImages($('.toBeFadedIn').not('.overlay-image'), 0.1);
});

// overlay image swap fade-in
$(window).scroll(function() {
    showImages($('.toBeFadedIn.overlay-image'), 0.6);
});

$(function() {

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                  target[0].scrollIntoView({behavior: "smooth"});
                  /*
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                    */
                }
            }
        });

});
