    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOADER
    window.addEventListener('load', () => {
        document.querySelector('.preloader').classList.add('preloader-finish');
    });

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SMOOTH SCROLLING
    $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
    });

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SKILLS ANIMATE ON SCROLL
    var skillsTopOffSet = $(".skills__container").offset().top;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffSet - $(window).height() + 200) {
            $(document).ready(function(){
            $(".skills__fill--html").animate({width:'80%'},1500);
            $(".skills__fill--css").animate({width:'85%'},1500);
            $(".skills__fill--js").animate({width:'60%'},1500);
            $(".skills__fill--bs").animate({width:'50%'},1500);
            $(".skills__fill--jquery").animate({width:'40%'},1500);
            $(".skills__fill--ps").animate({width:'75%'},1500);
            $(".skills__fill--ai").animate({width:'40%'},1500);
            $(".skills__fill--figma").animate({width:'60%'},1500);
            $(".skills__fill--wp").animate({width:'40%'},1500);
            $(".skills__fill--git").animate({width:'40%'},1500);
            });
        }

        if(scrollY > 200) {
            $('header').css('box-shadow', '0rem 0 .2rem #bdc3c7');
        } else {
            $('header').css('box-shadow', 'none');
        }
    });