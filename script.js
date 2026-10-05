// Theme toggle (saved choice wins over the system preference)
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function currentTheme() {
    const saved = root.getAttribute('data-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

themeToggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {
        // Storage unavailable (private window): the choice lasts for this visit only
    }
});

// Mobile navigation
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

function setNavOpen(open) {
    siteNav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

navToggle.addEventListener('click', () => {
    setNavOpen(!siteNav.classList.contains('is-open'));
});

siteNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => setNavOpen(false));
});

document.addEventListener('click', (e) => {
    if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        setNavOpen(false);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setNavOpen(false);
});

// Header border once the page is scrolled
const header = document.querySelector('.site-header');

function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Active navigation link highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-35% 0px -60% 0px' });

document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
} else {
    revealElements.forEach(el => el.classList.add('is-visible'));
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
