// Handle mobile navigation
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('header .container').prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// News & Insights hover effects
document.querySelectorAll('.article-card').forEach(card => {
    const readMore = card.querySelector('.read-more');
    if (readMore) {
        readMore.style.opacity = '0';
        readMore.style.transform = 'translateY(20px)';
        
        card.addEventListener('mouseenter', () => {
            readMore.style.opacity = '1';
            readMore.style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', () => {
            readMore.style.opacity = '0';
            readMore.style.transform = 'translateY(20px)';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            document.querySelector('nav').classList.remove('active');
        }
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
}); 