// ############## HEADER ####################
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('shadow'); // Add shadow class when scrolling
    } else {
        header.classList.remove('shadow'); // Remove shadow class when at the top
    }
});
// NAV BAR
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');

// Function to open mobile menu
mobileNavToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Show menu
    overlay.classList.add('active'); // Show overlay
});

// Function to close mobile menu
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Hide menu
    overlay.classList.remove('active'); // Hide overlay
});

// Close the mobile menu when clicking outside of it
overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Hide menu
    overlay.classList.remove('active'); // Hide overlay
});










// ############## SLICK PLUGIN FOR LOGO #################
$(document).ready(function(){
    $('.logo-slider').slick({
        infinite: true,
        slidesToShow: 6, // Default number of logos for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Wait for 2 seconds before sliding to the next logo
        speed: 1000, // Duration of the slide animation (in milliseconds)
        cssEase: 'ease', // Easing for a smooth slide animation
        arrows: false,
        dots: false,
        pauseOnHover: true,
        swipe: true,
        touchMove: true,
        draggable: true, // Enable dragging with the mouse (default is true)
        responsive: [
            {
                breakpoint: 1024, // For tablet and medium screens
                settings: {
                    slidesToShow: 4 // Show 4 logos for medium-sized screens
                }
            },
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 3 // Show 3 logos on small devices
                }
            },
            {
                breakpoint: 420, // Mobile breakpoint
                settings: {
                    slidesToShow: 2 // Show 3 logos on small devices
                }
            }
        ]
    });
});









// ############### TOGGLE SECTION #####################
document.querySelectorAll('.card-header').forEach(function (header) {
    header.addEventListener('click', function () {
        const icon = this.querySelector('.arrow-icon');
        const target = this.getAttribute('data-target');
        const isVisible = document.querySelector(target).classList.contains('show');

        // Reset all arrows except the clicked one
        document.querySelectorAll('.arrow-icon').forEach(function (arrow) {
            if (arrow !== icon) {
                arrow.classList.remove('rotate-down');
            }
        });

        if (isVisible) {
            icon.classList.remove('rotate-down');
        } else {
            icon.classList.add('rotate-down');
        }
    });
});
// For coloring the question
document.addEventListener("DOMContentLoaded", function () {
    const firstHeader = document.querySelector('#collapseOne').previousElementSibling;
    const firstH5 = firstHeader.querySelector('h5');
    firstH5.style.color = '#47b2e4'; // Set the color for the first question initially

    document.querySelectorAll('.card-header').forEach(function (header) {
        const h5 = header.querySelector('h5');
        const target = header.getAttribute('data-target');
        const isVisible = document.querySelector(target).classList.contains('show');

        // Set color for closed questions
        if (!isVisible) {
            h5.style.color = '#37517e';
        }

        header.addEventListener('click', function () {
            document.querySelectorAll('.card-header h5').forEach(function (h5) {
                h5.style.color = '#37517e'; // Set all questions to the closed color
            });

            if (!document.querySelector(target).classList.contains('show')) {
                // Set color only for the opened one
                h5.style.color = '#47b2e4';
            }
        });
    });
});










// ########### FILTER SECTION (ISOTOPE JQUERY PLUGIN) ##############
$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // Filter items when a button is clicked
    $('.filter-buttons').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});







// ######## SLICK SLIDER FOR TESTIMONIALS ##########
$(document).ready(function(){
    $('.tm_slider .tm_wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 3 seconds
        speed: 1000, // Animation speed in milliseconds
        infinite: true,
        dots: true,
        arrows: false,
        fade: false, // Set to true if you prefer a fade effect instead of sliding
        cssEase: 'ease-in-out'
    });
});










// ################## CONTACT SECTION ##########################
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    let isValid = true;
  
    // Get form inputs by their IDs
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailAddress');
    const subject = document.getElementById('subject');
    const messageInput = document.getElementById('message');
  
    // Clear previous error messages
    clearErrors();
  
    // Validate Full Name
    if (nameInput.value.trim() === '') {
      setError(nameInput, 'Full Name is required');
      isValid = false;
    }
  
    // Validate Email Address
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
      setError(emailInput, 'Email Address is required');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      setError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
  
    // No strict validation for Phone Number (just checking if it's not empty)
    if (subject.value.trim() === '') {
      setError(subject, 'Subject is required');
      isValid = false;
    }
  
    // Validate Message
    if (messageInput.value.trim() === '') {
      setError(messageInput, 'Message is required');
      isValid = false;
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
      // You can proceed with form submission, e.g., using AJAX or a backend method here
    }
  });
  
  function setError(input, message) {
    input.style.border = '2px solid red'; // Set red border on error
    const errorElement = document.createElement('small');
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
  }
  
  function clearErrors() {
    document.querySelectorAll('input').forEach(input => input.style.border = '');
    document.querySelectorAll('small').forEach(small => small.remove());
  }











//   #############  GSAP and ScrollTrigger CDN (Smooth transition while going to a section using menu) ########


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animations for each element with 'animate-on-scroll' class
gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 }, // Initial state for animation
        {
            opacity: 1, // End state for opacity
            y: 0, // End position
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%", // When to start the animation
                toggleActions: "play none none none",
            }
        }
    );
});





//############# ACTIVE SECTION COLOR ##############

