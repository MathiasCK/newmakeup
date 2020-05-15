
$(function (){
    let $window = $(window), win_height_padded = $window.height() * 1.1, isTouch = modernizr.touch;
    if (isTouch) {
        $('revealOnScroll').addClass('animated');
    }

    $window.on('scroll', revealOnScroll);
    function revealOnScroll() {
        let scrolled = $window.scrollTop(), win_height_padded = $window.height() * 1.1;
        $('.revealOnScroll:not(animated)').each(function () {
            let $this = $(this), offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
                if($this.data('timeout')) {
                    window.setTimeout(function (){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        $('.revealOnScroll.animated').each(function (index){
            let $this = $(this), offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
                $(this).removeClass('animated fadeInUp flipInX lightSpeedin');
            }
        });
    }
    revealOnScroll();
})