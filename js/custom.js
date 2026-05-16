
// document.addEventListener("DOMContentLoaded", function() {
//     const phoneInputs = document.querySelectorAll("#phone-input"); 
    
//     phoneInputs.forEach(input => {
//         window.intlTelInput(input, {
//             initialCountry: "bd",
//             separateDialCode: true,
//             dropdownContainer: document.body, 
//             onlyCountries: ["bd", "us", "gb", "sa", "pl"], 
//             utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//         });
//     });
// });


// window.addEventListener('scroll', function () {
//     const header = document.getElementById('mainHeader');
//     if (header) {
//         if (window.scrollY > 50) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled'); 
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.querySelector('#carouselExample');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 4000, 
            ride: 'carousel',
            wrap: true
        });
        carousel.cycle();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const targetSection = document.querySelector('.clint-section');

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

    if(targetSection) {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                runCounter();
                observer.disconnect(); 
            }
        }, { threshold: 0.5 });
        observer.observe(targetSection);
    }
});

$(document).ready(function(){
    if ($('.article-slider').length) {
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
    }

    if ($(".logo-slider").length) {
        $(".logo-slider").owlCarousel({
            loop: true,
            autoWidth: true,
            margin: 0,
            autoplay: false,
            smartSpeed: 1000,
            nav: false,
            dots: false
        });
    }
});

function displaySelectedName() {
    let input = document.getElementById('fileUploadInput');
    let display = document.getElementById('fileNameText');
    if (input && display) {
        display.innerText = input.files[0] ? input.files[0].name : "No file chosen";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.btn-cancel, .btn-close, .btn-close-custom');

    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const confirmClose = confirm("Are you sure you want to close? All the unsaved data will be lost.");

            if (confirmClose) {

                const modalElement = this.closest('.modal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }

        });
    });
});


function toggleCountryDropdown() {
    const list = document.getElementById('countryList');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}

function setNewCountry(countryCode, dialCode) {

    const mainFlag = document.getElementById('mainFlag');
    mainFlag.src = `https://flagcdn.com/w20/${countryCode}.png`;

    document.getElementById('countryList').style.display = 'none';
    
    console.log("Selected Country:", countryCode, "Dial Code:", dialCode);
}

window.onclick = function(event) {
    if (!event.target.closest('.flag-selection-area')) {
        const list = document.getElementById('countryList');
        if (list) list.style.display = 'none';
    }
}

document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.icon-box').forEach(icon => {
            icon.innerText = "«";
        });

        setTimeout(() => {
            if (!this.classList.contains('collapsed')) {
                this.querySelector('.icon-box').innerText = "→";
            }
        }, 10);
    });
});