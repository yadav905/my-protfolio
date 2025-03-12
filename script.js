// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const icon = item.querySelector('i');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        });

        // Open clicked FAQ item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            const icon = question.querySelector('i');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Email validation and form submission
const emailForm = document.querySelector('.email-signup');
const emailInput = emailForm.querySelector('input');
const getStartedButton = emailForm.querySelector('.get-started');

getStartedButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        // Here you would typically handle the form submission
        alert('Thank you for your interest! This is a clone website for demonstration purposes.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
        emailInput.focus();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dynamic FAQ content
const faqList = document.querySelector('.faq-list');
const additionalFaqs = [
    {
        question: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
    },
    {
        question: 'Where can I watch?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.'
    },
    {
        question: 'How do I cancel?',
        answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        question: 'What can I watch on Netflix?',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    }
];

// Add additional FAQs dynamically
additionalFaqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
        <button class="faq-question">
            ${faq.question}
            <i class="fas fa-plus"></i>
        </button>
        <div class="faq-answer">
            ${faq.answer}
        </div>
    `;
    faqList.appendChild(faqItem);
});

// Language selection
const languageSelects = document.querySelectorAll('.language-select');
languageSelects.forEach(select => {
    select.addEventListener('change', (e) => {
        const language = e.target.value;
        // Here you would typically handle language change
        // For demo purposes, we'll just show an alert
        alert(`Language changed to ${language === 'en' ? 'English' : 'हिंदी'}`);
    });
}); 