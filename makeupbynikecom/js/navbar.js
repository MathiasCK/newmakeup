// Make navbar sticky after intro img
$(window).scroll(function(){
    if($(this).scrollTop()>1000) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
}) 


// Navbar li scrolleffect
let scroll = new SmoothScroll('a[href*="#"]');


// Nav-item active
$('#menuList li').click(function(){

    $(this).addClass('active');
    $('#menuList li').removeClass('active');

})




