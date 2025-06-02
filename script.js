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



function loadPhotoWall() {
    const rows = [
        document.getElementById("photo-row-1"),
        document.getElementById("photo-row-2"),
        document.getElementById("photo-row-3")
    ];

    const images = [];
    for (let i = 1; i <= 310; i++) {
        const num = i.toString().padStart(3, '0');
        images.push(`img${num}.JPG`);
    }

    const shuffled = [...images].sort(() => 0.5 - Math.random());
    const imagesPerRow = Math.floor(shuffled.length / 3);

    rows.forEach((row, index) => {
        const start = index * imagesPerRow;
        const end = start + imagesPerRow;
        shuffled.slice(start, end).forEach(name => {
            const img = document.createElement("img");
            img.src = `images/photos/${name}`;
            img.alt = "RunKumbh Photo";
            img.onclick = () => {
                const modal = document.getElementById("img-modal");
                const modalImg = document.getElementById("img-modal-img");
                modal.style.display = "block";
                modalImg.src = img.src;
            };
            row.appendChild(img);
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    loadPhotoWall();

    const modal = document.getElementById("img-modal");
    const closeBtn = document.getElementById("img-modal-close");

    // Close button
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    // Click outside image
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    // Escape key
    window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
