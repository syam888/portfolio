(function($) {

    // Show current year in the footer
    $("#current-year").text(new Date().getFullYear());

    // Remove the no-js class for users with JavaScript enabled
    $('html').removeClass('no-js');

    // Smooth scroll to sections when nav is clicked
    $('header a').click(function(e) {

        // Skip scroll if 'no-scroll' class is added
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        // Smooth scroll animation
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1); // Modify speed here

        // Close the mobile menu after selection
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll back to the top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500); // Modify the speed for scrolling to top
    });

    // Scroll to the next section when the down arrow is clicked
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create the timeline in the Experience section
    $('#experience-timeline').each(function() {

        $this = $(this); // Reference to the timeline
        $userContent = $this.children('div'); // User content

        // Wrap each timeline block with structure
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block for the timeline
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline points if available
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // If a date exists, prepend it
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu when the icon is clicked
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu when 'Close' is clicked
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load more projects when 'View More Projects' is clicked
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
