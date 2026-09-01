// navbar.js - Responsive Navbar & Scroll Spy logic

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');

    // Toggle Mobile Navbar
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        });
    }

    // Close navbar when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuIcon && navbar) {
                menuIcon.classList.remove('fa-xmark');
                navbar.classList.remove('active');
            }
        });
    });

    // Scroll Spy for active section highlighting
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let top = window.scrollY;

            sections.forEach(sec => {
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        const target = link.getAttribute('href');
                        if (target === `#${id}` || target === `index.html#${id}`) {
                            navLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });

                    // Chameleon Navbar Logic: Flip header background color based on active section
                    if (header) {
                        const colorB_sections = ['about', 'education', 'portfolio'];
                        if (colorB_sections.includes(id)) {
                            header.style.background = 'var(--bg-color)';
                        } else {
                            header.style.background = 'var(--snd-bg-color)';
                        }
                    }
                }
            });
        });
    }
});
