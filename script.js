// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation class to skills cards when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add parallax effect to profile image
window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;
        profileImage.style.transform = `translateY(${rate}px)`;
    }
});

// Mobile menu toggle (for responsive design)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.querySelector('ul').classList.toggle('show');
    });
    
    nav.appendChild(mobileMenuBtn);
};

// Initialize mobile menu
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
