const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const revealElements = document.querySelectorAll('.stat-card, .breed-card, .health-card, .about-right, .image-grid, .cta-box');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
        }
    });
}, {
    threshold:0.15
});

revealElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(60px)';
    element.style.transition = 'all 1s ease';
    revealObserver.observe(element);
});

const buttons = document.querySelectorAll('.premium-btn, .glass-btn');

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    });

    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

