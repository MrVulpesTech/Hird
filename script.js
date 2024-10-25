$(document).ready(function() {
    // Плавне прокручування до секції при кліку на навігаційний лінк
    $('nav a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60 // Враховуємо висоту фіксованого заголовка
        }, 1000);
    });

    // Ініціалізація слайдера зображень
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


});

