
window.addEventListener('scroll', function () {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled'); 
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000, 
        ride: 'carousel',
        wrap: true
    });
    carousel.cycle();
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    
    const runCounter = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target'); 
                const count = +counter.innerText; 
                const speed = 150; 
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20); 
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            runCounter();
            observer.disconnect(); 
        }
    }, { threshold: 0.5 });

    const targetSection = document.querySelector('.clint-section');
    if(targetSection) {
        observer.observe(targetSection);
    }
});

$('.article-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 } 
    }
});

$(document).ready(function(){
  $(".logo-slider").owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    nav: false,
    dots: false
  });
});