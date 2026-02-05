// Cinematic Loader Handling
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-overlay');
    const bar = document.querySelector('.loader-bar');

    // Simulate loading progress
    bar.style.width = '100%';

    setTimeout(() => {
        loader.classList.add('loaded');
        // Initial hero reveal after loader
    }, 1000);
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Magnetic Buttons Handling
const magneticButtons = document.querySelectorAll('.btn-impact, .btn-submit-impact');
magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        cursor.style.transform = 'scale(4)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        cursor.style.transform = 'scale(1)';
    });
});

// Parallax Hero
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxBg = document.querySelector('.hero-parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
    }

    const nav = document.querySelector('.navbar');
    if (scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Section Reveal
const observerOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
