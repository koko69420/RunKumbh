// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Countdown Timer
const countdown = () => {
    const countDate = new Date('May 31, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculate remaining time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    // Update HTML
    document.getElementById('days').innerText = textDay < 10 ? '0' + textDay : textDay;
    document.getElementById('hours').innerText = textHour < 10 ? '0' + textHour : textHour;
    document.getElementById('minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
    document.getElementById('seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
    
    // If countdown is finished
    if (gap < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-timer').innerHTML = '<div class="countdown-ended">The RunKumbh Marathon has begun!</div>';
    }
};

// Run countdown every second
const countdownInterval = setInterval(countdown, 1000);

// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Form submission handling
const marathonForm = document.getElementById('marathon-form');
if (marathonForm) {
    marathonForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission code)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Registration Successful!';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = 'Complete Registration';
                submitBtn.disabled = false;
                
                // Show thank you message
                alert('Thank you for registering for RunKumbh 2025! We will contact you with further details.');
            }, 2000);
        }, 1500);
    });
}

// Form Toggle Functionality
const registerBtn = document.getElementById('registerBtn');
const formContainer = document.getElementById('formContainerr');
const formLink = document.getElementById('formLink');

registerBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Hide the register button
    registerBtn.style.display = 'none';

    // Show the form container
    formContainer.style.display = 'block';

    // Show the form link after a small delay
    setTimeout(() => {
        formLink.style.display = 'block';
    }, 1000);

    // Smooth scroll to the form
    formContainer.scrollIntoView({ behavior: 'smooth' });
});
