// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add smooth scrolling behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 107, 107, 0.95)';
        } else {
            navbar.style.backgroundColor = '';
        }
    });
    
    // Add click handlers for buttons
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('crafts').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Add click handlers for buy buttons
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! Cart functionality coming soon.');
        });
    });
    
    // Add animation on scroll for craft items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe craft items
    const craftItems = document.querySelectorAll('.craft-item');
    craftItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add some interactive features
function addToCart(craftName, price) {
    // This is a placeholder function for future e-commerce integration
    console.log(`Added ${craftName} (${price}) to cart`);
    alert(`${craftName} has been added to your cart!`);
}

// Contact form functionality (if you add a contact form later)
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
}

// Newsletter signup (if you add this feature later)
function subscribeNewsletter(email) {
    console.log(`Newsletter subscription for: ${email}`);
    alert('Thank you for subscribing to our newsletter!');
}
