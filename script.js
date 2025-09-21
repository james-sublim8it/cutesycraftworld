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
                
                // Track navigation clicks in Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'navigation_click', {
                        'section': targetId,
                        'event_category': 'engagement'
                    });
                }
                
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
            // Track CTA button clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'button_text': 'Shop Now',
                    'event_category': 'engagement'
                });
            }
            
            document.getElementById('crafts').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Add click handlers for buy buttons
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const craftItem = this.closest('.craft-item');
            const craftName = craftItem.querySelector('h3').textContent;
            const price = craftItem.querySelector('.price').textContent;
            
            // Track add to cart events for Google Analytics Enhanced Ecommerce
            if (typeof gtag !== 'undefined') {
                gtag('event', 'add_to_cart', {
                    'currency': 'USD',
                    'value': parseFloat(price.replace('$', '')),
                    'items': [{
                        'item_id': 'craft_' + (index + 1),
                        'item_name': craftName,
                        'category': 'Crafts',
                        'price': parseFloat(price.replace('$', '')),
                        'quantity': 1
                    }]
                });
            }
            
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
                
                // Track when craft items come into view
                const craftName = entry.target.querySelector('h3')?.textContent;
                if (craftName && typeof gtag !== 'undefined') {
                    gtag('event', 'view_item', {
                        'item_name': craftName,
                        'event_category': 'engagement'
                    });
                }
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
