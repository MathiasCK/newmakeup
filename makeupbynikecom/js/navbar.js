// Make navbar sticky after intro img
$(window).scroll(function(){
    if($(this).scrollTop()>400) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
}) 


// Navbar li scrolleffect
let scroll = new SmoothScroll('a[href*="#"]');


// Nav-link active
//Making class active by scrolling past it
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    var anchors = $('body').find('.anchor');
    for (var i = 0; i < anchors.length; i++){
        if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50) {
            $(anchors[i]).addClass('active');
        } else {
            $(anchors[i]).removeClass('active');
        }
    }
});




