document.addEventListener('DOMContentLoaded', function() {
    // Get hero section elements
    const heroSection = document.querySelector('.hero-section');
    const slides = document.querySelectorAll('.hero-slider .slide');
    const heroContent = document.querySelector('.hero-content');
    const ctaButton = document.getElementById('cta-btn');

    // Add initial opacity of 0 for fade-in effect
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';

    // Fade in hero content on load
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);

    // CTA button hover effect
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.8s ease';
        this.style.transform = 'scale(1.05)';
    });

    ctaButton.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.8s ease';
        this.style.transform = 'scale(1)';
    });

    // CTA button click handler
    ctaButton.addEventListener('click', function() {
        alert('Thank you for choosing CRS! We\'ll contact you soon.');
    });
});

function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show first slide
    showSlide(0);

    // Change slide every 6 seconds
    setInterval(nextSlide, 6000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);