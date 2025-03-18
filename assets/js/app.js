$(document).ready(function(){
    $('.navbar-nav .nav-link').on("click", function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })
    
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    })
})