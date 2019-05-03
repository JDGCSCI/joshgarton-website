$(document).ready(function() {
    // Initialize Sticker JS
    Sticker.init('.sticker');
    
    // Adds the scrolling animation to the links
    var scrollLinks = $(".scroll");
    var navLinks = $(".nav-link");

	// Updates the navbar to the correct section on page refresh
	var scrollBarLocation = $(this).scrollTop();

    // Sets the active nav link when the page is refreshed
    navLinks.each(function() {
		var sectionOffset = $(this.hash).offset().top - 68; // Subtract 68 to compensate for the 68px body top padding

        if (scrollBarLocation >= sectionOffset) {
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
        }
    })
	
	// Adds the ease scrolling effect to different sections 
    scrollLinks.click(function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 68 // Subtract 68 to compensate for the 68px body top padding
        }, 1000, "easeInOutExpo");
    });

    // Sets the active navbar link depending on the position of the scroll bar
    $(window).scroll(function() {
        var scrollBarLocation = $(this).scrollTop();

        navLinks.each(function() {
            var sectionOffset = $(this.hash).offset().top - 68; // Subtract 68 to compensate for the 68px body top padding

            if (scrollBarLocation >= sectionOffset) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })

    // Adds the animated hamburger icon
    $(".animated-button").click(function() {
        $(".animated-button-icon").toggleClass("open");
    });

    // Sends the form data to contact.php via ajax
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        
        var form = $(this);
            
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
        }).done(function(data) {
            $("#messageSentModal").modal("show");
        }).fail(function(data) {
            $("#messageErrorModal").modal("show");
        });

        $(this)[0].reset();
    });
});