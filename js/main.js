const responsive={
    0: {
        items: 1,
    },
    320: {
        items: 1,
    },
    560: {
        items: 2,
    },
    960: {
        items: 3,
    },
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive,
    });


    //click to scroll top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },1000)
    });

    //click to scroll to main section
    $('.btn-explore').click(function(){
        $('html, body').animate({
            scrollTop: $('#post1').offset().top,
        },500)
    });
    $('.btn-post1').click(function(){
        $('html, body').animate({
            scrollTop: $('#post1').offset().top,
        },500)
    });
    $('.btn-post2').click(function(){
        $('html, body').animate({
            scrollTop: $('#post2').offset().top,
        },500)
    });
    $('.btn-post3').click(function(){
        $('html, body').animate({
            scrollTop: $('#post3').offset().top,
        },500)
    });
});