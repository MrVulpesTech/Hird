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

    // Додавання анімації при скролі
    $(window).on('scroll', function() {
        $('.unit-card').each(function() {
            var cardTop = $(this).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scrollTop + windowHeight - 100 > cardTop) {
                $(this).addClass('animate-fadeInUp');
            }
        });
    });
});

// Функція для перевірки, коли елемент з'являється на екрані
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Додаємо клас "visible", коли користувач долистує до другого блоку
window.addEventListener('scroll', function() {
    const secondBlock = document.getElementById('second-block');
    if (isInViewport(secondBlock)) {
        secondBlock.classList.add('visible');
    }
});
